import { BuildingEntity } from 'src/@entity/building.entity';
import { CommonFacilityEntity } from 'src/@entity/common-facility.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('building_facility')
export class BuildingFacilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  renovationDate: Date;

  @ManyToOne(() => BuildingEntity, (building) => building.facilities)
  @JoinColumn()
  building: BuildingEntity;

  @ManyToOne(
    () => CommonFacilityEntity,
    (commonFacility) => commonFacility.buildings,
  )
  @JoinColumn()
  facility: CommonFacilityEntity;
}
