import { Module } from '@nestjs/common';
import { DaratItemFoundService } from './darat-item-founds.service';
import { DaratItemFoundEntityController } from './darat-item-founds.controller';
import { DaratItemFoundEntity } from './darat-item-founds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratItemFoundEntity])],
  providers: [DaratItemFoundService],
  controllers: [DaratItemFoundEntityController],
  exports: [DaratItemFoundService],
})
export class DaratItemFoundModule {}

