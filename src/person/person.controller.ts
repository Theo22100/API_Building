import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service';
import { PersonDto } from 'src/@dto/person-dto';

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

  @Post('/')
  async createPerson(@Res() res, @Body() personDto: PersonDto) {
    const result = await this.service.createPerson(personDto);
    return res.status(HttpStatus.CREATED).json(result);
  }
}
