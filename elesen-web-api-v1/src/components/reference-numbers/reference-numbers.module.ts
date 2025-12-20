import { Module } from '@nestjs/common';
import { ReferenceNumberService } from './reference-numbers.service';
import { ReferenceNumberEntityController } from './reference-numbers.controller';
import { ReferenceNumberEntity } from './reference-numbers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReferenceNumberEntity])],
  providers: [ReferenceNumberService],
  controllers: [ReferenceNumberEntityController],
  exports: [ReferenceNumberService],
})
export class ReferenceNumberModule {}

