import { Address } from '../@models/address';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { AddressEntity } from './AddressEntity';

@Entity()
export class BuildingEntity implements Building {
  @PrimaryGeneratedColumn()
  id: number;
//Appartement
@ManyToOne((type) => AddressEntity, (address) => address.clubs)
address: AddressEntity;