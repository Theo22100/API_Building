import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TenantEntity } from './TenantEntity';

@Entity()
export class RentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.rents)
  tenant: TenantEntity;

  @Column()
  date: Date;
}
