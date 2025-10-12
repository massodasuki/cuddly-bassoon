import { Module } from '@nestjs/common';
import { PekelilingService } from './pekelilings.service';
import { PekelilingEntityController } from './pekelilings.controller';
import { PekelilingEntity } from './pekelilings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PekelilingEntity])],
  providers: [PekelilingService],
  controllers: [PekelilingEntityController],
  exports: [PekelilingService],
})
export class PekelilingModule {}
