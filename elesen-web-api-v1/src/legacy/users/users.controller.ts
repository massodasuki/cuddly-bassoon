// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  NotFoundException,
  Query,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUsersDto } from './dto/create-users.dto'
import { UpdateUsersDto } from './dto/update-users.dto'
import { MinimalUserDto } from './dto/minimal-user.dto'
import { UUID } from 'crypto'
import { ApiOperation, ApiParam } from '@nestjs/swagger'
import { PaginationQueryDto } from '../common/dto/pagination-query.dto'

@Controller('/api/v1/applications/users')
export class UsersController {
  constructor (private readonly usersService: UsersService) {}

  // PROFIL BY NELAYAN API
  // Get by level
  @ApiOperation({
    summary: 'Get users by role level',
    description:
      'Returns all users who belong to a specific role level (e.g. admin = 1, supervisor = 2).',
  })
  @Get('nelayan')
  async findAllNelayan (@Query() paginationQuery: PaginationQueryDto) {
    return this.usersService.getUsersWhereEntityIdNull(paginationQuery)
  }

  @ApiOperation({
    summary: 'Get minimal nelayan data',
    description: 'Returns minimal user data for nelayan with pagination and optional lesen filter.',
  })
  @Get('nelayan-minimal')
  async findAllNelayanMinimal (
    @Query() paginationQuery: PaginationQueryDto,
    @Query('lesen') lesen?: string,
  ) {
    return this.usersService.findAllMinimalUsersWhereEntityIdNull(paginationQuery, lesen)
  }



  @Get('nelayan/:id')
  async getNelayan (@Param('id') id: UUID) {
    return this.usersService.getNelayanWithProfile(id)
  }

  @Get('level/:level')
  async findAllByLevel (
    @Param('level') level: number,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.usersService.getUsersByRoleLevel(level, paginationQuery)
  }

  @ApiOperation({
    summary: 'List all nelayan base on role level and ic',
    description:
      'Returns user(s) who have the specified role level and IC number (stored in profile.ref).',
  })
  @ApiParam({
    name: 'level',
    type: String,
    description: 'Role Level (e.g. 1, 2)',
  })
  @ApiParam({
    name: 'username',
    type: String,
    description: 'IC/Username number (e.g. 920101011234)',
  })
  @Get('n')
  getUserByRoleAndIC (
    @Query('level') level: number,
    @Query('username') username: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.usersService.getUsersByRoleLevelAndUsername(
      level,
      username,
      paginationQuery,
    )
  }
  // END PROFIL BY NELAYAN API

  // PROFIL BY VESSEL API

  @ApiOperation({
    summary: 'List all nelayan base on vessles no',
    description:
      'Returns user(s) who have the specified role level and IC number (stored in profile.ref).',
  })
  @ApiParam({
    name: 'vessels',
    type: String,
    description: 'Vessels (e.g. 1, 2)',
  })
  @Get('v')
  getUserByVessels (@Query('vessels') noVessel: string) {
    return this.usersService.getUsersByVessel(noVessel)
  }

  // END PROFIL BY VESSEL API

  // POST /users - Create a new user
  @Post()
  async create (@Body() createUserDto: CreateUsersDto) {
    const { username, password } = createUserDto
    return this.usersService.createUser(username, password)
  }

  // GET /users - Get all users
  @Get()
  async findAll (@Query() paginationQuery: PaginationQueryDto) {
    return this.usersService.findAll(paginationQuery)
  }

  @ApiOperation({
    summary: 'Get user profile by ID',
    description:
      'Returns the user along with profile and related info like gender, race, religion, and marital status.',
  })
  @Get('profile/:id')
  async getUser (@Param('id') id: UUID) {
    return this.usersService.getUserWithProfile(id)
  }

  // GET /users/:id - Get user by ID
  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Returns basic user information by UUID.',
  })
  @Get('id/:id')
  async findById (@Param('id') id: UUID) {
    return this.usersService.findById(id)
  }

  // GET /users/username/:username - Get user by username
  @ApiOperation({
    summary: 'Get user by username/ic',
    description: 'Returns a user record based on their username.',
  })
  @Get('username/:username')
  async findByUsername (@Param('username') username: string) {
    const user = await this.usersService.findByUsername(username)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  @ApiOperation({
    summary: 'Update user by username',
    description: 'Updates a user’s data by their username.',
  })
  @Patch('username/:username')
  update (
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUsersDto,
  ) {
    return this.usersService.update(username, updateUserDto)
  }
}

