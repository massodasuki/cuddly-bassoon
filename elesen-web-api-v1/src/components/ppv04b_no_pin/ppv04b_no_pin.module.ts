import { Module } from '@nestjs/common';
import { Ppv04bNoPinService } from './ppv04b_no_pin.service';
import { Ppv04bNoPinController } from './ppv04b_no_pin.controller';
import { Ppv04bNoPinEntity } from './ppv04b_no_pin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bNoPinEntity])],
  providers: [Ppv04bNoPinService],
  controllers: [Ppv04bNoPinController],
  exports: [Ppv04bNoPinService],
})
export class Ppv04bNoPinModule {}