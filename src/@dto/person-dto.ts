import { ApiProperty } from '@nestjs/swagger';
import { Person } from 'src/@model/person-dto';

export class PersonDto implements Person {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  isVatRegistered: boolean;
  @ApiProperty()
  id?: number | undefined;
}
