import { Module } from '@nestjs/common';
import { HebahanService } from './hebahans.service';
import { HebahanEntityController } from './hebahans.controller';
import { HebahanEntity } from './hebahans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HebahanEntity])],
  providers: [HebahanService],
  controllers: [HebahanEntityController],
  exports: [HebahanService],
})
export class HebahanModule {}
