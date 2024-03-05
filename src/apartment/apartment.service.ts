import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { changeOwnerDto } from './dto/change-owner.dto';
import { addTenantsDto } from './dto/add-tenants.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentEntity } from '../@entity/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BuildingEntity } from 'src/@entity/building.entity';
import { BuildingService } from 'src/building/building.service';
import { ApartmentTypeService } from 'src/apartment-type/apartment-type.service';
import { ApartmentTypeEntity } from 'src/@entity/apartment-type.entity';
import { ApartmentOptionService } from 'src/apartment-option/apartment-option.service';
import { ApartmentOptionEntity } from 'src/@entity/apartment-option.entity';
import { OwnerEntity } from 'src/@entity/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { TenantEntity } from 'src/@entity/tenant.entity';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class ApartmentService extends BaseService<ApartmentEntity> {
  constructor(
    @InjectRepository(ApartmentEntity)
    protected readonly repository: Repository<ApartmentEntity>,
    @Inject(forwardRef(() => BuildingService))
    protected readonly buildingService: BuildingService,
    protected readonly apartmentTypeService: ApartmentTypeService,
    protected readonly apartmentOptionService: ApartmentOptionService,
    protected readonly ownerService: OwnerService,
    protected readonly tenantService: TenantService,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async create(
    createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    const apartment: ApartmentEntity = new ApartmentEntity();
    Object.assign(apartment, createApartmentDto);
    const building: BuildingEntity = await this.buildingService.findOne(
      createApartmentDto.buildingId,
    );
    const apartmentType: ApartmentTypeEntity =
      await this.apartmentTypeService.findOne(
        createApartmentDto.apartmentTypeId,
      );

    const options: ApartmentOptionEntity[] = [];
    for (const optionId of createApartmentDto.options) {
      const option = await this.apartmentOptionService.findOne(optionId);
      if (option) {
        options.push(option);
      } else {
        throw new NotFoundException(
          `Apartment option with ID ${optionId} not found`,
        );
      }
    }

    if (!building) {
      throw new Error('Building not found');
    }
    if (!apartmentType) {
      throw new Error('Apartment type not found');
    }
    apartment.building = building;
    apartment.type = apartmentType;
    apartment.options = options;
    return (await this.saveEntities(apartment))?.[0];
  }

  async remove(id: number): Promise<ApartmentEntity> {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }

  async addTenant(
    id: number,
    addTenant: addTenantsDto,
  ): Promise<ApartmentEntity> {
    const apartment: ApartmentEntity = await this.findOne(id);
    const tenant: TenantEntity = await this.tenantService.create(addTenant);
    apartment.tenants.push(tenant);
    if (apartment.principalTenant === null) {
      apartment.principalTenant = tenant;
    }

    await this.saveEntities(apartment)?.[0];

    return apartment;
  }

  async changeOwner(id: number, changeOwnerDto: changeOwnerDto) {
    const apartment: ApartmentEntity = await this.repository.findOne({
      where: { id },
    });
    const owner: OwnerEntity = await this.ownerService.findOne(
      changeOwnerDto.ownerId,
    );

    apartment.owner = owner;

    return await this.saveEntities(apartment)?.[0];
  }

  async findAll(): Promise<ApartmentEntity[]> {
    try {
      const apartments: ApartmentEntity[] = await this.repository.find({
        relations: [
          'building',
          'type',
          'options',
          'owner',
          'tenants',
          'principalTenant',
        ],
      });
      return apartments;
    } catch (error) {
      console.error(
        'An error occurred when retrieving all apartments with the relations :',
        error,
      );
      throw error;
    }
  }

  async findOne(id: number): Promise<ApartmentEntity> {
    const result: ApartmentEntity = await this.repository.findOne({
      where: { id },
      relations: [
        'building',
        'type',
        'options',
        'owner',
        'tenants',
        'principalTenant',
      ],
    });
    return result;
  }

  async update(
    id: number,
    updateApartmentDto: UpdateApartmentDto,
  ): Promise<ApartmentEntity> {
    const apartment: ApartmentEntity = await this.repository.findOne({
      where: { id },
    });
    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }

    if (
      updateApartmentDto.buildingId &&
      (!apartment.building ||
        updateApartmentDto.buildingId !== apartment.building.id)
    ) {
      const building = await this.buildingService.findOne(
        updateApartmentDto.buildingId,
      );
      apartment.building = building;
    }

    if (
      updateApartmentDto.apartmentTypeId &&
      (!apartment.type ||
        updateApartmentDto.apartmentTypeId !== apartment.type.id)
    ) {
      const type = await this.apartmentTypeService.findOne(
        updateApartmentDto.apartmentTypeId,
      );
      apartment.type = type;
    }

    Object.assign(apartment, updateApartmentDto);
    return await this.repository.save(apartment);
  }
}
