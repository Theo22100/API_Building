import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingFacilityService } from './building-facility.service';
import { CreateBuildingFacilityDto } from './dto/create-building_facility.dto';
import { UpdateBuildingFacilityDto } from './dto/update-building_facility.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Facilities Building')
@Controller('building-facility')
export class BuildingFacilityController {
  constructor(
    private readonly buildingFacilityService: BuildingFacilityService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create info for facility of building' })
  create(@Body() createBuildingFacilityDto: CreateBuildingFacilityDto) {
    return this.buildingFacilityService.createwithDto(
      createBuildingFacilityDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all facilities from buildings' })
  findAll() {
    return this.buildingFacilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get facility of a building' })
  findOne(@Param('id') id: string) {
    return this.buildingFacilityService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete facility of building' })
  remove(@Param('id') id: string) {
    return this.buildingFacilityService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update facility of building' })
  update(
    @Param('id') id: string,
    @Body() updateBuildingFacilityDto: UpdateBuildingFacilityDto,
  ) {
    return this.buildingFacilityService.update(+id, updateBuildingFacilityDto);
  }
}
