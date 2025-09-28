import { Test, TestingModule } from '@nestjs/testing';
import { DigitalIdService } from './digital-id.service';

describe('DigitalIdService', () => {
  let service: DigitalIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalIdService],
    }).compile();

    service = module.get<DigitalIdService>(DigitalIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
