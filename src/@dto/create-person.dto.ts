import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isVatRegistered: boolean;
}
