import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController} from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GoogleStrategy } from './google.strategy'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, PrismaModule],
  controllers: [AppController,AuthController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
