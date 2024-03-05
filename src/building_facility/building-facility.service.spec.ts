import { Test, TestingModule } from '@nestjs/testing';
import { BuildingFacilityService } from './building-facility.service';

describe('BuildingFacilityService', () => {
  let service: BuildingFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingFacilityService],
    }).compile();

    service = module.get<BuildingFacilityService>(BuildingFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
