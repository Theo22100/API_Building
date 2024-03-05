import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  @ApiOperation({ summary: 'Get all addresses' })
  findAll() {
    return this.addressService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create an address' })
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete address' })
  remove(@Param('id') id: string) {
    return this.addressService.deleteAddress(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one address' })
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update address' })
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }
}
