import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address-dto';
import { BuildingCommonEquipmentDto } from './buildingcommonequipment-dto';
import { ApartmentDto } from './apartment-dto';

export class BuildingDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: AddressDto;

  @ApiProperty({ type: [BuildingCommonEquipmentDto] })
  commonEquipments: BuildingCommonEquipmentDto[];

  @ApiProperty({ type: [ApartmentDto] })
  apartments: ApartmentDto[];
}
