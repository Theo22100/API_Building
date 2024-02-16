import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BuildingCommonEquipmentEntity } from './BuildingCommonEquipmentEntity';

@Entity()
export class CommonEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  lastInspectionDate: Date;

  @OneToMany(
    () => BuildingCommonEquipmentEntity,
    (buildingCommonEquipment) => buildingCommonEquipment.equipment,
  )
  buildings: BuildingCommonEquipmentEntity[];
}
