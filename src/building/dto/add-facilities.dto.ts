import { ApiProperty } from '@nestjs/swagger';
import { AssociateFacilityDto } from 'src/building-facility/dto/associate-facility.dto';

export class AddFacilityDto {
  @ApiProperty({ type: [AssociateFacilityDto], minItems: 1 })
  facilities: AssociateFacilityDto[];
}
