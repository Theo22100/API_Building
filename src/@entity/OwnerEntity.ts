import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApartmentEntity } from './ApartmentEntity';

@Entity()
export class OwnerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @Column()
  isVatRegistered: boolean;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.owner)
  ownedApartments: ApartmentEntity[];

  @Column()
  personId: number;
}
