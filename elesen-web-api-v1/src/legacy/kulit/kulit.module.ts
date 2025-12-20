import { Module } from '@nestjs/common';
import { KulitEntityervice } from './kulit.service';
import { KulitEntityController } from './kulit.controller';
import { KulitEntity } from './kulit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KulitEntity])],
  providers: [KulitEntityervice],
  controllers: [KulitEntityController],
  exports: [KulitEntityervice],
})
export class KulitModule {}

