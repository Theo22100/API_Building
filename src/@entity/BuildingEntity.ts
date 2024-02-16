import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BuildingCommonEquipmentEntity } from './BuildingCommonEquipmentEntity';
import { ApartmentEntity } from './ApartmentEntity';
import { AddressEntity } from './AdressEntity';

@Entity()
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AddressEntity, (address) => address.building)
  address: AddressEntity;

  @OneToMany(
    () => BuildingCommonEquipmentEntity,
    (buildingCommonEquipment) => buildingCommonEquipment.building,
  )
  commonEquipments: BuildingCommonEquipmentEntity[];

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.building)
  apartments: ApartmentEntity[];
}
