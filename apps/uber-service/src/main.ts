import { NestFactory } from '@nestjs/core';
import { UberServiceModule } from './uber-service.module';

async function bootstrap() {
  const app = await NestFactory.create(UberServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
