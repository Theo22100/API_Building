import { ApiProperty } from '@nestjs/swagger';
import { ApartmentDto } from './apartment-dto';

export class ApartmentOptionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  apartment: ApartmentDto;
}
