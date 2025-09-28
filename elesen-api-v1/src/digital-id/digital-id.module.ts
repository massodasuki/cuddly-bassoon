import { Module } from '@nestjs/common';
import { DigitalIdService } from './digital-id.service';
import { DigitalIdController } from './digital-id.controller';

@Module({
  controllers: [DigitalIdController],
  providers: [DigitalIdService],
})
export class DigitalIdModule {}
