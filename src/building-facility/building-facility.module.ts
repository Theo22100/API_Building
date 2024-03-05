import { Module } from '@nestjs/common';
import { BuildingFacilityService } from './building-facility.service';
import { BuildingFacilityController } from './building-facility.controller';
import { BuildingFacilityEntity } from '../@entity/building-facility.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingFacilityEntity])],
  controllers: [BuildingFacilityController],
  providers: [BuildingFacilityService],
  exports: [BuildingFacilityService],
})
export class BuildingFacilityModule {}
