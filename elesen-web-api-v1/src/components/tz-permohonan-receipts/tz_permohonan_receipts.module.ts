import { Module } from '@nestjs/common';
import { TzPermohonanReceiptsService } from './tz_permohonan_receipts.service';
import { TzPermohonanReceiptsController } from './tz_permohonan_receipts.controller';
import { TzPermohonanReceiptsEntity } from './tz_permohonan_receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanReceiptsEntity])],
  providers: [TzPermohonanReceiptsService],
  controllers: [TzPermohonanReceiptsController],
  exports: [TzPermohonanReceiptsService],
})
export class TzPermohonanReceiptsModule {}