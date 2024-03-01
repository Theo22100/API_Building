import { Identifier } from './identifier-dto';

export interface Rent extends Identifier {
  amount: number;
  tenantId: number;
  date: Date;
}
