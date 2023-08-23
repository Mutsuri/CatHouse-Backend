import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GoogleStrategy } from './google.strategy'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, GoogleStrategy],
  exports: [PrismaService],
})
export class AppModule {}
