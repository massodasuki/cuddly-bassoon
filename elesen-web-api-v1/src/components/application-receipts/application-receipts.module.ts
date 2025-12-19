import { Module } from '@nestjs/common';
import { ApplicationReceiptsService } from './application-receipts.service';
import { ApplicationReceiptsController } from './application-receipts.controller';
import { ApplicationReceiptsEntity } from './application-receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationReceiptsEntity])],
  providers: [ApplicationReceiptsService],
  controllers: [ApplicationReceiptsController],
  exports: [ApplicationReceiptsService],
})
export class ApplicationReceiptsModule {}