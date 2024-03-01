import { Identifier } from './identifier-dto';

export interface Apartment extends Identifier {
  doorNumber: string;
  floor: string;
  type: string;
}
