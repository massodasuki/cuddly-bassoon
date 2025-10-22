import { Module } from '@nestjs/common';
import { Kru04ApplicationService } from './kru04-applications.service';
import { Kru04ApplicationEntityController } from './kru04-applications.controller';
import { Kru04ApplicationEntity } from './kru04-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kru04ApplicationEntity])],
  providers: [Kru04ApplicationService],
  controllers: [Kru04ApplicationEntityController],
  exports: [Kru04ApplicationService],
})
export class Kru04ApplicationModule {}
