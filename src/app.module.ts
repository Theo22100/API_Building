import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentEntity } from './@entity/apartmentEntity';
import { ApartmentOptionEntity } from './@entity/apartmentOptionEntity';
import { BuildingEntity } from './@entity/buildingEntity';
import { CommonFacilityEntity } from './@entity/commonFacilityEntity';
import { OwnerEntity } from './@entity/ownerEntity';
import { TenantEntity } from './@entity/tenantEntity';
import { BuildingController } from './building/building.controller';
import { BuildingService } from './building/building.service';
import { OwnerController } from './owner/owner.controller';
import { OwnerService } from './owner/owner.service';
import { AddressController } from './address/address.controller';
import { AddressService } from './address/address.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'O)B5&nE6F',
      database: 'api_building',
      entities: [
        ApartmentEntity,
        ApartmentOptionEntity,
        BuildingEntity,
        CommonFacilityEntity,
        OwnerEntity,
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