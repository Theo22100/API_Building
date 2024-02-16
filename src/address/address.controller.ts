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
import { AddressService } from './address.service';
import { AddressDto } from 'src/@dto/address-dto';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly service: AddressService) {}

  @Get('/')
  async getAddress(@Res() res) {
    const result = await this.service.getAddress();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get('/:id')
  async getAddressId(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const result = await this.service.getAddressId(id);
    if (!result) {
      throw new NotFoundException('Address does not exist!');
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('/')
  async createAddress(@Res() res, @Body() addressDto: AddressDto) {
    const result = await this.service.createAddress(addressDto);
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Delete('/:id')
  async deleteTodo(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deletedItem = await this.service.deleteAddress(id);
    if (!deletedItem) {
      throw new NotFoundException('Address does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Address has been deleted!',
      todo: deletedItem,
    });
  }
}
