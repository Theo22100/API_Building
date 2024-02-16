import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApartmentEntity } from './ApartmentEntity';
import { RentEntity } from './RentEntity';

@Entity()
export class TenantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isMainTenant: boolean;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.tenants)
  apartment: ApartmentEntity;

  @OneToMany(() => RentEntity, (rent) => rent.tenant)
  rents: RentEntity[];

  @Column()
  personId: number;
}
