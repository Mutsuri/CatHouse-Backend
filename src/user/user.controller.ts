import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards
} from '@nestjs/common';
import {
  UserService
} from './user.service';
import {
  CreateUserDto
} from './create-user.dto';
import {
  AuthGuard
} from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('username')
  getUserByUsername(@Param() param) {
    return this.userService.getUserbyEmail(param.username);
  }
}