import { Controller, Body, Get, Res, Query, HttpStatus, Post  } from '@nestjs/common';
import { DigitalIdService } from './digital-id.service';
import { Request, Response } from 'express';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';

interface CustomRequest extends Request {
  session: {
    idToken?: string;
  };
}

@ApiTags('DigitalID')
@Controller('api/v1/applications/auth/d')
export class DigitalIdController {
  constructor(private readonly digitalIdService: DigitalIdService) {}

  @Get('login')
  login(@Res() res: Response) {
    const authUrl = this.digitalIdService.getLoginUrl();
    console.log('Redirecting to Keycloak login:', authUrl);
    res.redirect(authUrl);
  }

  @Get('callback')
  async handleCallback(
    @Query('code') code: string,
    @Res() res: Response,
  ) {
    if (!code) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Authorization code is missing' });
    }

    // Prevent reuse (you can later store this in DB or cache)
    if (this.digitalIdService.isCodeUsed(code)) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Authorization code already used' });
    }

    this.digitalIdService.markCodeAsUsed(code);

    try {
      const { name, nric } = await this.digitalIdService.exchangeCodeForUser(code);
      return res.status(200).send({ name, nric });
    } catch (error) {
      console.error('Error exchanging code:', error.message || error);
      return res.status(500).json({
        error: 'Failed to exchange code for token',
        details: error.response?.data || error.message,
      });
    }
  }

  // Logout
  @Post('logout')
  logoutMobile(@Body() body: { refreshToken: string }) {
    return this.digitalIdService.logoutFromKeycloak(body.refreshToken);
}
}
