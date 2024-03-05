import { PartialType } from '@nestjs/swagger';
import { CreateBuildingFacilityDto } from './create-building_facility.dto';

export class UpdateBuildingFacilityDto extends PartialType(
  CreateBuildingFacilityDto,
) {}
