import { NestFactory } from '@nestjs/core';
import { UberServiceModule } from './uber-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UberServiceModule);
  app.useGlobalPipes(new ValidationPipe()); // Apply class validators on all of the request handlers
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
