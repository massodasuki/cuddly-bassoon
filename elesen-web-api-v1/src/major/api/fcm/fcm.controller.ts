import { Controller, Post, Body } from '@nestjs/common';

import { FcmService } from './fcm.service';
import { SendMessageDto } from './dto/send-message.dto';
import { SendToAllMessageDto } from './dto/send-to-all-message.dto';

@Controller('/api/v1/applications/fcm')
export class FcmController {
  constructor(private readonly fcmService: FcmService) {}

  @Post('send')
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.fcmService.sendMessage(sendMessageDto);
  }

  @Post('send/all')
  async sendToAll(@Body() sendToAllMessageDto: SendToAllMessageDto) {
    return this.fcmService.sendToAll(sendToAllMessageDto);
  }
}