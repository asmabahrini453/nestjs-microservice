import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { LoggingServiceModule } from './logging-service.module'; // This should match the file name exactly

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  //apply class validators on all of the request handlers
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
