import { Module } from '@nestjs/common';
import { Kru01ApplicationService } from './kru01-applications.service';
import { Kru01ApplicationEntityController } from './kru01-applications.controller';
import { Kru01ApplicationEntity } from './kru01-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kru01ApplicationEntity])],
  providers: [Kru01ApplicationService],
  controllers: [Kru01ApplicationEntityController],
  exports: [Kru01ApplicationService],
})
export class Kru01ApplicationModule {}
