import { Test, TestingModule } from '@nestjs/testing';
import { DeviceRegistrationService } from './device-registration.service';

describe('DeviceRegistrationService', () => {
  let service: DeviceRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceRegistrationService],
    }).compile();

    service = module.get<DeviceRegistrationService>(DeviceRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
