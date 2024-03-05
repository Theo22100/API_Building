import { AddressEntity } from 'src/@entity/address.entity';
import { ApartmentEntity } from 'src/@entity/apartment.entity';

import { CommonFacilityEntity } from 'src/@entity/common-facility.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('building')
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  constructionDate: Date;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.building, {
    nullable: true,
  })
  apartments: ApartmentEntity[];

  @ManyToMany(() => CommonFacilityEntity, (facilitie) => facilitie.buildings)
  @JoinTable()
  facilities: CommonFacilityEntity[];

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity;
}
