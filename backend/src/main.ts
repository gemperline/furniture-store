import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as openurl from 'openurl';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = [
    'http://localhost:3001',
    // 'https://your-prod-domain.com'
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Furniture Store API')
    .setDescription(
      'API documentation for a luxury furniture eCommerce backend',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 3000;
  await app.listen(port);

  // ✅ Open Swagger only once per process and only in development
  if (
    process.env.NODE_ENV === 'development' &&
    !globalThis.__SWAGGER_OPENED__
  ) {
    console.log('is swagger open?', globalThis.__SWAGGER_OPENED__);
    globalThis.__SWAGGER_OPENED__ = true;
    openurl.open(`http://localhost:${port}/api`);
  }
}
bootstrap();
