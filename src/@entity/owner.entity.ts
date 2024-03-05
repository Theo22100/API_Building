import { ApartmentEntity } from 'src/@entity/apartment.entity';
import { PersonEntity } from 'src/@entity/person.entity';
import { Column, OneToMany, ChildEntity } from 'typeorm';

@ChildEntity('owner')
export class OwnerEntity extends PersonEntity {
  @Column()
  account: number;

  @Column()
  tva: boolean;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.owner)
  apartments: ApartmentEntity[];
}
