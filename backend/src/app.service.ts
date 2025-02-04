import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): string {
    return 'Welcome!';
  }

  getHello(): string {
    return 'Hello NestJS!';
  }

  getGoodbye(): string {
    return 'Goodbye NestJS!';
  }
}
