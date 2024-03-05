import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AddressModule } from './address/address.module';
import { AddressEntity } from './@entity/address.entity';
import { ApartmentEntity } from './@entity/apartment.entity';
import { ApartmentOptionEntity } from './@entity/apartment-option.entity';
import { BuildingEntity } from './@entity/building.entity';
import { OwnerEntity } from './@entity/owner.entity';
import { PersonEntity } from './@entity/person.entity';
import { TenantEntity } from './@entity/tenant.entity';
import { ApartmentTypeEntity } from './@entity/apartment-type.entity';
import { BuildingFacilityEntity } from './@entity/building-facility.entity';
import { CommonFacilityEntity } from './@entity/common-facility.entity';
import { ApartmentOptionModule } from './apartment-option/apartment-option.module';
import { ApartmentTypeModule } from './apartment-type/apartment-type.module';
import { ApartmentModule } from './apartment/apartment.module';
import { BuildingModule } from './building/building.module';
import { BuildingFacilityModule } from './building_facility/building-facility.module';
import { CommonFacilityModule } from './common-facility/common-facility.module';
import { OwnerModule } from './owner/owner.module';
import { TenantModule } from './tenant/tenant.module';

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
        ApartmentEntity,
        ApartmentOptionEntity,
        ApartmentTypeEntity,
        BuildingEntity,
        BuildingFacilityEntity,
        CommonFacilityEntity,
        OwnerEntity,
        PersonEntity,
        TenantEntity,
      ],
      synchronize: true,
    }),
    PersonModule,
    AddressModule,
    ApartmentModule,
    ApartmentOptionModule,
    ApartmentTypeModule,
    BuildingModule,
    BuildingFacilityModule,
    CommonFacilityModule,
    OwnerModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
