import { ApiProperty } from '@nestjs/swagger';
import { BuildingDto } from './building-dto';
import { CommonEquipmentDto } from './common-equipment-dto';

export class BuildingCommonEquipmentDto {
  @ApiProperty()
  building: BuildingDto;

  @ApiProperty()
  equipment: CommonEquipmentDto;
}
