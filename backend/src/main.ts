import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //TODO: /swagger 진입 시, 인증을 거치도록 설정. express-basic-auth 패키지 expressBasicAuth 사용 가능.

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API Documentation for NestJS')
    .setVersion('1.0')
    .addTag('Root')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter your JWT token',
        in: 'header',
      },
      'access-token',
    )
    .addCookieAuth('refresh-token')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDocument, {
    //테스트시 인증을 계속 유지할 때 사용
    //swaggerOptions: {
    //  persistAuthorization: true,
    //},
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
