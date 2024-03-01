import { ApiProperty } from '@nestjs/swagger';
import { ApartmentDto } from './apartment-dto';

export class OwnerDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  accountNumber: string;

  @ApiProperty()
  isVatRegistered: boolean;

  @ApiProperty({ type: [ApartmentDto] })
  ownedApartments: ApartmentDto[];

  @ApiProperty()
  personId: number;
}
