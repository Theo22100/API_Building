import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service';

@ApiTags('person')
@Controller('person')
export class PersonController {
  constructor(private readonly service: PersonService) {}

  @Get('/')
  async getPersons(@Res() res) {
    const result = await this.service.getPersons();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get('/:id')
  async getPerson(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const result = await this.service.getPerson(id);
    if (!result) {
      throw new NotFoundException('Person does not exist!');
    }
    return res.status(HttpStatus.OK).json(result);
  }
}
