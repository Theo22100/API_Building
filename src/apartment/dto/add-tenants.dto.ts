import { ApiProperty } from '@nestjs/swagger';

export class addTenantsDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;
}
