

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
