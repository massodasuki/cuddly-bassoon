import { Module } from '@nestjs/common';
import { ApplicationSupportDocumentService } from './application_support_document.service';
import { ApplicationSupportDocumentController } from './application_support_document.controller';
import { ApplicationSupportDocumentEntity } from './application_support_document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationSupportDocumentEntity])],
  providers: [ApplicationSupportDocumentService],
  controllers: [ApplicationSupportDocumentController],
  exports: [ApplicationSupportDocumentService],
})
export class ApplicationSupportDocumentModule {}