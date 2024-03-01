import { Apartment } from './apartment-dto';
import { Identifier } from './identifier-dto';

export interface Tenant extends Identifier {
  isMainTenant: boolean;
  apartment: Apartment;
  personId: number;
}
