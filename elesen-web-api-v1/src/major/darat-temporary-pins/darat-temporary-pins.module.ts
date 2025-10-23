import { Module } from '@nestjs/common';
import { DaratTemporaryPinService } from './darat-temporary-pins.service';
import { DaratTemporaryPinEntityController } from './darat-temporary-pins.controller';
import { DaratTemporaryPinEntity } from './darat-temporary-pins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratTemporaryPinEntity])],
  providers: [DaratTemporaryPinService],
  controllers: [DaratTemporaryPinEntityController],
  exports: [DaratTemporaryPinService],
})
export class DaratTemporaryPinModule {}
