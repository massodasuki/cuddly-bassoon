import { Test, TestingModule } from '@nestjs/testing';
import { LpiFormService } from './lpi-form.service';

describe('LpiFormService', () => {
  let service: LpiFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LpiFormService],
    }).compile();

    service = module.get<LpiFormService>(LpiFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
