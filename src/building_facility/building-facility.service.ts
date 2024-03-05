import { Injectable } from '@nestjs/common';
import { UpdateBuildingFacilityDto } from './dto/update-building_facility.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingFacilityEntity } from '../@entity/building-facility.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class BuildingFacilityService extends BaseService<BuildingFacilityEntity> {
  constructor(
    @InjectRepository(BuildingFacilityEntity)
    protected readonly repository: Repository<BuildingFacilityEntity>,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async create(
    createBuildingFacilityDto: BuildingFacilityEntity,
  ): Promise<BuildingFacilityEntity> {
    const info: BuildingFacilityEntity = new BuildingFacilityEntity();
    info.building = createBuildingFacilityDto[1];
    info.facility = createBuildingFacilityDto[2];
    info.renovationDate = createBuildingFacilityDto[0];
    console.log(info);
    return await this.saveEntities(info)?.[0];
  }

  async createwithDto(
    createBuildingFacilityDto: UpdateBuildingFacilityDto,
  ): Promise<BuildingFacilityEntity> {
    const info: BuildingFacilityEntity = new BuildingFacilityEntity();
    info.building = createBuildingFacilityDto[1];
    info.facility = createBuildingFacilityDto[2];
    info.renovationDate = createBuildingFacilityDto[0];
    console.log(info);
    return await this.saveEntities(info)?.[0];
  }

  findAll(): Promise<BuildingFacilityEntity[]> {
    return this.repository.find({ relations: ['building', 'facility'] });
  }

  findOne(id: number): Promise<BuildingFacilityEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(
    id: number,
    updateBuildingFacilityDto: UpdateBuildingFacilityDto,
  ): Promise<BuildingFacilityEntity> {
    const infoFacilitie: BuildingFacilityEntity = new BuildingFacilityEntity();
    Object.assign(infoFacilitie, updateBuildingFacilityDto);
    return await this.repository.save(infoFacilitie);
  }

  async remove(id: number): Promise<BuildingFacilityEntity> {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
