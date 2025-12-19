import { Module } from '@nestjs/common';
import { ApplicationSupportDocumentService } from './application-support-document.service';
import { ApplicationSupportDocumentController } from './application-support-document.controller';
import { ApplicationSupportDocumentEntity } from './application-support-document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationSupportDocumentEntity])],
  providers: [ApplicationSupportDocumentService],
  controllers: [ApplicationSupportDocumentController],
  exports: [ApplicationSupportDocumentService],
})
export class ApplicationSupportDocumentModule {}