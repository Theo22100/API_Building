import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommonFacilityService } from './common-facility.service';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Common facility')
@Controller('common-facility')
export class CommonFacilityController {
  constructor(private readonly commonFacilityService: CommonFacilityService) {}

  @Post()
  @ApiOperation({ summary: 'Create facility' })
  create(@Body() createCommonFacilityDto: CreateCommonFacilityDto) {
    return this.commonFacilityService.create(createCommonFacilityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all facilities' })
  findAll() {
    return this.commonFacilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get facility' })
  findOne(@Param('id') id: string) {
    return this.commonFacilityService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete facility' })
  remove(@Param('id') id: string) {
    return this.commonFacilityService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update facility' })
  update(
    @Param('id') id: string,
    @Body() updateCommonFacilityDto: UpdateCommonFacilityDto,
  ) {
    return this.commonFacilityService.update(+id, updateCommonFacilityDto);
  }
}
