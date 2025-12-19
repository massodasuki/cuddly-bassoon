import { Module } from '@nestjs/common';
import { LpiNavigationsService } from './lpi_navigations.service';
import { LpiNavigationsController } from './lpi_navigations.controller';
import { LpiNavigationsEntity } from './lpi_navigations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiNavigationsEntity])],
  providers: [LpiNavigationsService],
  controllers: [LpiNavigationsController],
  exports: [LpiNavigationsService],
})
export class LpiNavigationsModule {}