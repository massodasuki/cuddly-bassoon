import { Module } from '@nestjs/common';
import { NelayanMarinService } from './nelayan-marins.service';
import { NelayanMarinEntityController } from './nelayan-marins.controller';
import { NelayanMarinEntity } from './nelayan-marins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NelayanMarinEntity])],
  providers: [NelayanMarinService],
  controllers: [NelayanMarinEntityController],
  exports: [NelayanMarinService],
})
export class NelayanMarinModule {}

