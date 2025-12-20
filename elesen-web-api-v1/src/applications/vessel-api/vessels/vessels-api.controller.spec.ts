import { Test, TestingModule } from '@nestjs/testing';
import { VesselsApiController } from './vessels-api.controller';
import { VesselsApiService } from './vessels-api.service';

describe('VesselsController', () => {
  let controller: VesselsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselsApiController],
      providers: [VesselsApiService],
    }).compile();

    controller = module.get<VesselsApiController>(VesselsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

