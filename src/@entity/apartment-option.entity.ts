import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('apartment_option')
export class ApartmentOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
