import { ApartmentEntity } from 'src/@entity/apartment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apartment_type')
export class ApartmentTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.type)
  apartments: ApartmentEntity[];
}
