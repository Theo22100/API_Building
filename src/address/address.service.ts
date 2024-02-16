import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressDto } from 'src/@dto/address-dto';
import { AddressEntity } from 'src/@entity/AdressEntity';
import { Address } from 'src/@model/address-dto';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    protected readonly repository: Repository<AddressEntity>,
  ) {}

  getAddress(): Promise<AddressEntity[]> {
    return this.repository.find();
  }

  async getAddressId(id: number): Promise<AddressEntity> {
    return this.repository.findOneBy({ id });
  }

  async deleteAddress(id: number): Promise<Address> {
    const result = await this.getAddressId(id);
    await this.repository.delete(id);
    return result;
  }

  async createAddress(addressDto: AddressDto): Promise<AddressEntity> {
    const newAddress = this.repository.create(addressDto);
    return this.repository.save(newAddress);
  }
}
