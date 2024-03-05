import { ApartmentOptionEntity } from 'src/@entity/apartment-option.entity';
import { ApartmentTypeEntity } from 'src/@entity/apartment-type.entity';
import { BuildingEntity } from 'src/@entity/building.entity';
import { OwnerEntity } from 'src/@entity/owner.entity';
import { TenantEntity } from 'src/@entity/tenant.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('apartment')
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: number;

  @Column()
  door: number;

  @Column()
  rent: number;

  @ManyToOne(() => BuildingEntity, (building) => building.apartments)
  building: BuildingEntity;

  @ManyToOne(
    () => ApartmentTypeEntity,
    (apartmentType) => apartmentType.apartments,
  )
  type: ApartmentTypeEntity;

  @ManyToOne(() => OwnerEntity, (owner) => owner.apartments)
  owner: OwnerEntity;

  @OneToMany(() => TenantEntity, (tenant) => tenant.apartment)
  tenants: TenantEntity[];

  @ManyToMany(() => ApartmentOptionEntity)
  @JoinTable()
  options: ApartmentOptionEntity[];

  @OneToOne(() => TenantEntity, { nullable: true })
  @JoinColumn()
  principalTenant: TenantEntity | null;
}
