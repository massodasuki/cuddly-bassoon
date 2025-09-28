import { Test, TestingModule } from '@nestjs/testing';
import { DigitalIdController } from './digital-id.controller';
import { DigitalIdService } from './digital-id.service';

describe('DigitalIdController', () => {
  let controller: DigitalIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalIdController],
      providers: [DigitalIdService],
    }).compile();

    controller = module.get<DigitalIdController>(DigitalIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
