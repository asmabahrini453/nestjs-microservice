import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  //apply class validators on all of the request handlers
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
