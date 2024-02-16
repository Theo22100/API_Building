import { Identifier } from './identifier-dto';

export interface Address extends Identifier {
  streetNumber: string;
  street: string;
  zipCode: string;
  city: string;
}
