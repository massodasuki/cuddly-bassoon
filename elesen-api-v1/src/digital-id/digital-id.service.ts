import { Injectable } from '@nestjs/common';
import { CreateDigitalIdDto } from './dto/create-digital-id.dto';
import { UpdateDigitalIdDto } from './dto/update-digital-id.dto';
import * as querystring from 'querystring';
import axios from 'axios';
import * as qs from 'querystring';


@Injectable()
export class DigitalIdService {
  
  // Login

  getLoginUrl(): string {
    const authUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth?` +
      querystring.stringify({
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        response_type: 'code',
        scope: 'openid',
        redirect_uri: process.env.KEYCLOAK_REDIRECT_URI,
      });

    return authUrl;
  }


  // callback

  private usedCodes = new Set<string>();

  isCodeUsed(code: string): boolean {
    return this.usedCodes.has(code);
  }

  markCodeAsUsed(code: string): void {
    this.usedCodes.add(code);
  }

  
  async exchangeCodeForUser(code: string): Promise<{ name: string; nric: string }> {
    const tokenUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;

    const response = await axios.post<{ id_token: string }>(
      tokenUrl,
      qs.stringify({
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.KEYCLOAK_REDIRECT_URI,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const idToken = response.data.id_token;
    const base64Payload = idToken.split('.')[1];
    const decodedToken = JSON.parse(Buffer.from(base64Payload, 'base64').toString());

    console.log('Decoded token:', decodedToken);

    const { name, nric } = decodedToken;
    return { name, nric };
  }

  //Logout

  async logoutFromKeycloak(refreshToken: string) {
  const response = await axios.post(
    `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`,
    qs.stringify({
      client_id: process.env.KEYCLOAK_CLIENT_ID,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
      refresh_token: refreshToken,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return { success: true };
}

  create(createDigitalIdDto: CreateDigitalIdDto) {
    return 'This action adds a new digitalId';
  }

  findAll() {
    return `This action returns all digitalId`;
  }

  findOne(id: number) {
    return `This action returns a #${id} digitalId`;
  }

  update(id: number, updateDigitalIdDto: UpdateDigitalIdDto) {
    return `This action updates a #${id} digitalId`;
  }

  remove(id: number) {
    return `This action removes a #${id} digitalId`;
  }
}
