import { Identifier } from './identifier-dto';

export interface Person extends Identifier {
  firstName: string;
  lastName: string;
  isVatRegistered: boolean;
}
