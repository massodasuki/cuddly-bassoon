import { Module } from '@nestjs/common';
import { LpiNavigationsService } from './lpi-navigations.service';
import { LpiNavigationsController } from './lpi-navigations.controller';
import { LpiNavigationsEntity } from './lpi-navigations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiNavigationsEntity])],
  providers: [LpiNavigationsService],
  controllers: [LpiNavigationsController],
  exports: [LpiNavigationsService],
})
export class LpiNavigationsModule {}