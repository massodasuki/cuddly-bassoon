import { Injectable, NotFoundException } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import axios from 'axios';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { InjectRepository } from '@nestjs/common';
import { Repository } from '@nestjs/common';

@Injectable()
export class FcmService {
  private auth: GoogleAuth;
  private axiosInstance: any;


  constructor(
    @InjectRepository(DeviceRegistrationEntity)
    private readonly deviceRepository : Repository<DeviceRegistrationEntity>
   ) {
    this.auth = new GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    this.axiosInstance = axios.create({
      baseURL: 'https://fcm.googleapis.com',
    });
  }

  async sendMessage(sendMessageDto: SendMessageDto): Promise<any> {
    let fcm_token = '';
    fcm_token = sendMessageDto.token;
    if(sendMessageDto.username != null) {
        const deviceEntity = await this.findOne(sendMessageDto.username);
        fcm_token = deviceEntity.fcm_token
    }

    const accessToken = await this.auth.getAccessToken();

    const message = {
      message: {
        token: fcm_token,
        notification: {
          title: sendMessageDto.title,
          body: sendMessageDto.body,
        },
        data: sendMessageDto.data || {},
      },
    };

    const response = await this.axiosInstance.post(
      '/v1/projects/elesen-mobile/messages:send',
      message,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  }

  async sendToAll(sendToAllMessageDto: SendToAllMessageDto): Promise<any[]> {
    const devices = await this.deviceRepository.find();
    const accessToken = await this.auth.getAccessToken();

    const results: any[] = [];

    for (const device of devices) {
      const message = {
        message: {
          token: device.fcm_token,
          notification: {
            title: sendToAllMessageDto.title,
            body: sendToAllMessageDto.body,
          },
          data: sendToAllMessageDto.data || {},
        },
      };

      try {
        const response = await this.axiosInstance.post(
          '/v1/projects/elesen-mobile/messages:send',
          message,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          },
        );
        results.push({ username: device.username, success: true, data: response.data });
      } catch (error) {
        results.push({ username: device.username, success: false, error: error.message });
      }
    }

    return results;
  }


  async findOne(username: string): Promise<DeviceRegistrationEntity> {
      const deviceRegistration = await this.deviceRepository.findOne({ where: { username } });
      if (!deviceRegistration) {
        throw new NotFoundException(`DeviceRegistration with username ${username} not found`);
      }
      return deviceRegistration;
    }
}