import { Module } from '@nestjs/common';
import { ApplicationPinService } from './application-pins.service';
import { ApplicationPinController } from './application-pins.controller';
import { ApplicationPinEntity } from './application-pins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationPinEntity])],
  providers: [ApplicationPinService],
  controllers: [ApplicationPinController],
  exports: [ApplicationPinService],
})
export class ApplicationPinModule {}