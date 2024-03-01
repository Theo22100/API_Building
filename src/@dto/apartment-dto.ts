import { ApiProperty } from '@nestjs/swagger';
import { BuildingDto } from './building-dto';
import { PersonDto } from './person-dto';
import { ApartmentOptionDto } from './apartment-option-dto';
import { TenantDto } from './tenant-dto';

export class ApartmentDto {
  @ApiProperty()
  doorNumber: string;

  @ApiProperty()
  floor: number;

  @ApiProperty()
  type: string;

  @ApiProperty({ type: BuildingDto })
  building: BuildingDto;

  @ApiProperty({ type: PersonDto })
  owner: PersonDto;

  @ApiProperty({ type: [TenantDto] })
  tenants: TenantDto[];

  @ApiProperty({ type: [ApartmentOptionDto] })
  options: ApartmentOptionDto[];
}
