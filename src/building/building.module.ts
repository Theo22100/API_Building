import { Module, forwardRef } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingEntity } from '../@entity/building.entity';
import { AddressModule } from 'src/address/address.module';
import { BuildingFacilityModule } from 'src/building_facility/building-facility.module';
import { CommonFacilityModule } from 'src/common-facility/common-facility.module';
import { ApartmentModule } from 'src/apartment/apartment.module';

@Module({
  imports: [
    forwardRef(() => ApartmentModule),
    AddressModule,
    BuildingFacilityModule,
    CommonFacilityModule,
    TypeOrmModule.forFeature([BuildingEntity]),
  ],
  controllers: [BuildingController],
  providers: [BuildingService],
  exports: [BuildingService],
})
export class BuildingModule {}
