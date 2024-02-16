import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from 'src/@dto/create-person.dto';
import { PersonEntity } from 'src/@entity/PersonEntity';
import { UpdatePersonDto } from 'src/@dto/update-person.dto';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto): Promise<PersonEntity> {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll(): Promise<PersonEntity[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PersonEntity> {
    return this.personService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ): Promise<PersonEntity> {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personService.remove(+id);
  }
}
