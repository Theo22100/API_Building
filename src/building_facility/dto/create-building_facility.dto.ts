import { ApiProperty } from '@nestjs/swagger';
import { BuildingEntity } from 'src/@entity/building.entity';
import { CommonFacilityEntity } from 'src/@entity/common-facility.entity';

export class CreateBuildingFacilityDto {
  @ApiProperty()
  renovationDate: Date;

  @ApiProperty()
  building: BuildingEntity;

  @ApiProperty()
  facility: CommonFacilityEntity;
}
