import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ApartmentOption')
export class ApartmentOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
