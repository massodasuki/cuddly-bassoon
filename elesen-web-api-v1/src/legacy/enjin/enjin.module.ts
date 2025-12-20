import { Module } from '@nestjs/common';
import { EnjinEntityervice } from './enjin.service';
import { EnjinEntityController } from './enjin.controller';
import { EnjinEntity } from './enjin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EnjinEntity])],
  providers: [EnjinEntityervice],
  controllers: [EnjinEntityController],
  exports: [EnjinEntityervice],
})
export class EnjinModule {}

