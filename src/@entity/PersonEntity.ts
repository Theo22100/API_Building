import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApartmentEntity } from './ApartmentEntity';

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  isVatRegistered: boolean;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.owner)
  ownedApartments: ApartmentEntity[];

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.tenants)
  rentedApartments: ApartmentEntity[];
}
