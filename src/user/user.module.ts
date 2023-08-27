import {
  Module
} from '@nestjs/common';
import {
  UserService
} from './user.service';
import {
  UserController
} from './user.controller';
import {
  User,
  UserSchema
} from 'src/user/user.schema';
import {
  JwtModule
} from '@nestjs/jwt';
import {
  jwtConstants
} from 'src/strategy/constants';
import {
  HashService
} from 'src/user/hash.service';
import {
  AuthService
} from 'src/auth/auth.service';
import {
  JwtStrategy
} from 'src/strategy/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, HashService, AuthService, JwtStrategy],
})
export class UserModule {}