import {
  Module
} from '@nestjs/common';
import {
  AuthService
} from './auth.service';
import {
  AuthController
} from './auth.controller';
import {
  UserService
} from 'src/user/user.service';
import {
  HashService
} from 'src/user/hash.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [JwtModule.register({global:true, secret:"G"}), PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, HashService],
})
export class AuthModule { }