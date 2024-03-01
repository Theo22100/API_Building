import { ApiProperty } from '@nestjs/swagger';
import { TenantDto } from './tenant-dto';

export class RentDto {
  @ApiProperty()
  amount: number;

  @ApiProperty({ type: TenantDto })
  tenant: TenantDto;

  @ApiProperty()
  date: Date;
}
