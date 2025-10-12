import { Module } from '@nestjs/common';
import { DaratBaseJettieService } from './darat-base-jetties.service';
import { DaratBaseJettieEntityController } from './darat-base-jetties.controller';
import { DaratBaseJettieEntity } from './darat-base-jetties.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratBaseJettieEntity])],
  providers: [DaratBaseJettieService],
  controllers: [DaratBaseJettieEntityController],
  exports: [DaratBaseJettieService],
})
export class DaratBaseJettieModule {}
