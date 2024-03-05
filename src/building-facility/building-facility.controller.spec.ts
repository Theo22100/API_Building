import { Test, TestingModule } from '@nestjs/testing';
import { BuildingFacilityController } from './building-facility.controller';
import { BuildingFacilityService } from './building-facility.service';

describe('BuildingFacilityController', () => {
  let controller: BuildingFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingFacilityController],
      providers: [BuildingFacilityService],
    }).compile();

    controller = module.get<BuildingFacilityController>(
      BuildingFacilityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
