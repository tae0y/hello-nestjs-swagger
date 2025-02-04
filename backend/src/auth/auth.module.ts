import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BasicStrategy } from './auth.jwt.strategy';

@Module({
  providers: [AuthService, BasicStrategy],
  exports: [AuthService],
})
export class AuthModule {}
