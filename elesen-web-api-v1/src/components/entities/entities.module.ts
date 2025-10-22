import { Module } from '@nestjs/common';
import { EntitieService } from './entities.service';
import { EntitieEntityController } from './entities.controller';
import { EntitieEntity } from './entities.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntitieEntity])],
  providers: [EntitieService],
  controllers: [EntitieEntityController],
  exports: [EntitieService],
})
export class EntitieModule {}
