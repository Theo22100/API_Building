import { Apartment } from './apartment-dto';

export interface Owner {
  id: number;
  accountNumber: string;
  isVatRegistered: boolean;
  ownedApartments: Apartment[];
  personId: number;
}
