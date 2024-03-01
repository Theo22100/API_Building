import { ApiProperty } from '@nestjs/swagger';
import { ApartmentDto } from './apartment-dto';

export class TenantDto {
  @ApiProperty()
  isMainTenant: boolean;

  @ApiProperty({ type: ApartmentDto })
  apartment: ApartmentDto;

  @ApiProperty()
  personId: number;
}
