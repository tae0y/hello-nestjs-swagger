import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthStrategy } from './auth.jwt.strategy';
@Module({
  providers: [AuthService, JwtAuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
