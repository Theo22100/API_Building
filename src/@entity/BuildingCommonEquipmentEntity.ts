import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BuildingEntity } from './BuildingEntity';
import { CommonEquipmentEntity } from './CommonEquipmentEntity';

@Entity()
export class BuildingCommonEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BuildingEntity, (building) => building.commonEquipments)
  building: BuildingEntity;

  @ManyToOne(
    () => CommonEquipmentEntity,
    (commonEquipment) => commonEquipment.buildings,
  )
  equipment: CommonEquipmentEntity;
}
