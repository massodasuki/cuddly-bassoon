// src/auth/guards/jwt-refresh.guard.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh') {}
