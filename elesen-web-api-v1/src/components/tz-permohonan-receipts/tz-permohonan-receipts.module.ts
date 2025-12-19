import { Module } from '@nestjs/common';
import { TzPermohonanReceiptsService } from './tz-permohonan-receipts.service';
import { TzPermohonanReceiptsController } from './tz-permohonan-receipts.controller';
import { TzPermohonanReceiptsEntity } from './tz-permohonan-receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanReceiptsEntity])],
  providers: [TzPermohonanReceiptsService],
  controllers: [TzPermohonanReceiptsController],
  exports: [TzPermohonanReceiptsService],
})
export class TzPermohonanReceiptsModule {}