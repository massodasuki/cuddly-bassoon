import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

describe('VesselsController', () => {
  let controller: VesselsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselsController],
      providers: [VesselsService],
    }).compile();

    controller = module.get<VesselsController>(VesselsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
