import { Test, TestingModule } from '@nestjs/testing';
import { VesselsApiService } from './vessels-api.service';

describe('VesselsService', () => {
  let service: VesselsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselsApiService],
    }).compile();

    service = module.get<VesselsApiService>(VesselsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

