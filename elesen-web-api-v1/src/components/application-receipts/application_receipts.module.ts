import { Module } from '@nestjs/common';
import { ApplicationReceiptsService } from './application_receipts.service';
import { ApplicationReceiptsController } from './application_receipts.controller';
import { ApplicationReceiptsEntity } from './application_receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationReceiptsEntity])],
  providers: [ApplicationReceiptsService],
  controllers: [ApplicationReceiptsController],
  exports: [ApplicationReceiptsService],
})
export class ApplicationReceiptsModule {}