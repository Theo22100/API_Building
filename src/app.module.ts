import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingController } from './building/building.controller';
import { BuildingService } from './building/building.service';
import { OwnerController } from './owner/owner.controller';
import { OwnerService } from './owner/owner.service';
import { AddressController } from './address/address.controller';
import { AddressService } from './address/address.service';
import { AddressEntity } from './@entity/AdressEntity';
import { ApartmentEntity } from './@entity/ApartmentEntity';
import { ApartmentOptionEntity } from './@entity/ApartmentOptionEntity';
import { BuildingCommonEquipmentEntity } from './@entity/BuildingCommonEquipmentEntity';
import { ApartmentApartmentOptionEntity } from './@entity/Apartment_ApartmentOptionEntity';
import { BuildingEntity } from './@entity/BuildingEntity';
import { CommonEquipmentEntity } from './@entity/CommonEquipmentEntity';
import { OwnerEntity } from './@entity/OwnerEntity';
import { PersonEntity } from './@entity/PersonEntity';
import { RentEntity } from './@entity/RentEntity';
import { TenantEntity } from './@entity/TenantEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'building',
      password: 'Bu1ld1ng!',
      database: 'api_building',
      entities: [
        AddressEntity,
        ApartmentApartmentOptionEntity,
        ApartmentEntity,
        ApartmentOptionEntity,
        BuildingCommonEquipmentEntity,
        BuildingEntity,
        CommonEquipmentEntity,
        OwnerEntity,
        PersonEntity,
        RentEntity,
        TenantEntity,

      ],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    AddressController,
    BuildingController,
    OwnerController,
  ],
  providers: [AppService, AddressService, BuildingService, OwnerService],
})
export class AppModule {}