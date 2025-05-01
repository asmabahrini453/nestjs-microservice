import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
