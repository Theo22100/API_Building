import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Appartment Type')
@Controller('apartment-type')
export class ApartmentTypeController {
  constructor(private readonly apartmentTypeService: ApartmentTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create apartment option' })
  create(@Body() createApartmentTypeDto: CreateApartmentTypeDto) {
    return this.apartmentTypeService.create(createApartmentTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all apartment types' })
  findAll() {
    return this.apartmentTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get apartment type' })
  findOne(@Param('id') id: string) {
    return this.apartmentTypeService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete apartment option' })
  remove(@Param('id') id: string) {
    return this.apartmentTypeService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update apartment option' })
  update(
    @Param('id') id: string,
    @Body() updateApartmentTypeDto: UpdateApartmentTypeDto,
  ) {
    return this.apartmentTypeService.update(+id, updateApartmentTypeDto);
  }
}
