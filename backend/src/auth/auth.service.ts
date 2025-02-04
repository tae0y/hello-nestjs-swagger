import { Injectable } from '@nestjs/common';
import { JwtConstants } from './constants';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    console.log('AuthService');
    // 예시: 간단한 기본 인증 검증 로직
    if (
      username === JwtConstants.user_id &&
      password === JwtConstants.password
    ) {
      // 비밀번호를 반환하지 않고 사용자 정보를 반환
      return { user_id: JwtConstants.user_id, username };
    }
    return null;
  }
}
