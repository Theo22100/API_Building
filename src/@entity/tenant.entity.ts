import { ApartmentEntity } from 'src/@entity/apartment.entity';
import { PersonEntity } from 'src/@entity/person.entity';
import { ManyToOne, ChildEntity } from 'typeorm';

@ChildEntity('tenant')
export class TenantEntity extends PersonEntity {
  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.tenants)
  apartment: ApartmentEntity;
}
