
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('/api/v1/applications/image/')
export class ImageController {

  constructor(private readonly imageUploadService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('imageType') imageType: string,
  ) {
    console.log(file);
    return this.imageUploadService.handleUpload(file, imageType);
  }
}

