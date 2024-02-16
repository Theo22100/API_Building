import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BuildingEntity } from './BuildingEntity';
import { PersonEntity } from './PersonEntity';
import { ApartmentOptionEntity } from './ApartmentOptionEntity';
import { TenantEntity } from './TenantEntity';

@Entity()
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doorNumber: string;

  @Column()
  floor: number;

  @Column()
  type: string;

  @ManyToOne(() => BuildingEntity, (building) => building.apartments)
  building: BuildingEntity;

  @ManyToOne(() => PersonEntity, (owner) => owner.ownedApartments)
  owner: PersonEntity;

  @OneToMany(() => TenantEntity, (tenant) => tenant.apartment)
  tenants: TenantEntity[];

  @OneToMany(() => ApartmentOptionEntity, (option) => option.apartment)
  options: ApartmentOptionEntity[];
}
