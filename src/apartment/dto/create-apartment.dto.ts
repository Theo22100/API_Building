import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {
  @ApiProperty()
  buildingId: number;

  @ApiProperty()
  apartmentTypeId: number;

  @ApiProperty()
  floor: number;

  @ApiProperty()
  door: number;

  @ApiProperty()
  rent: number;

  @ApiProperty({ type: [Number] })
  options: number[];
}
