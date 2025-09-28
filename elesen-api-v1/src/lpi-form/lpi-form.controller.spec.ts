import { Test, TestingModule } from '@nestjs/testing';
import { LpiFormController } from './lpi-form.controller';
import { LpiFormService } from './lpi-form.service';

describe('LpiFormController', () => {
  let controller: LpiFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LpiFormController],
      providers: [LpiFormService],
    }).compile();

    controller = module.get<LpiFormController>(LpiFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
