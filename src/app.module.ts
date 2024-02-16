import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { PersonModule } from './person/person.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

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
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
