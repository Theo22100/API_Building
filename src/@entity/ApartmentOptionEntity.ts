import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApartmentEntity } from './ApartmentEntity';

@Entity()
export class ApartmentOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.options)
  apartment: ApartmentEntity;
}
