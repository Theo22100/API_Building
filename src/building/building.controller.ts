import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { BuildingService } from './building.service';
import { BuildingDto } from 'src/@dto/building-dto';

@ApiTags('building')
@Controller('building')
export class BuildingController {
  constructor(private readonly service: BuildingService) {}

  @Get('/')
  async getBuilding(@Res() res) {
    const result = await this.service.getBuilding();
    return res.status(HttpStatus.OK).json(result);
  }
  /*
    @Get('/:id')
    async getBuildingId(@Res() res, @Param('id', ParseIntPipe) id: number) {
      const result = await this.service.getBuildingId(id);
      if (!result) {
        throw new NotFoundException('Building does not exist!');
      }
      return res.status(HttpStatus.OK).json(result);
    }*/

  @Post('/')
  async createBuilding(@Res() res, @Body() buildingDto: BuildingDto) {
    const result = await this.service.createBuilding(buildingDto);
    return res.status(HttpStatus.CREATED).json(result);
  }
}
