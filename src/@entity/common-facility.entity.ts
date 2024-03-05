import { BuildingEntity } from 'src/@entity/building.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('CommonFacility')
export class CommonFacilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => BuildingEntity, (building) => building.facilities)
  buildings: BuildingEntity[];
}
