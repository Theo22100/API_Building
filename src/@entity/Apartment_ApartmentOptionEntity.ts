import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApartmentEntity } from './ApartmentEntity';
import { ApartmentOptionEntity } from './ApartmentOptionEntity';

@Entity()
export class ApartmentApartmentOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.options)
  apartment: ApartmentEntity;

  @ManyToOne(() => ApartmentOptionEntity, (option) => option.apartment)
  option: ApartmentOptionEntity;
}
