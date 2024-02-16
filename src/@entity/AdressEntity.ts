import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { BuildingEntity } from './BuildingEntity';

@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  streetNumber: string;

  @Column()
  street: string;

  @Column()
  zipCode: string;

  @Column()
  city: string;

  @OneToOne(() => BuildingEntity, (building) => building.address)
  building: BuildingEntity;
}
