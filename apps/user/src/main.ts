import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  // This allows Clerk to validate the raw body of webhook events
  app.use('/webhooks/clerk', bodyParser.raw({ type: '*/*' }));

  // Use correct environment variable casing and fallback
  const port = process.env.PORT || 3004;
  await app.listen(port);
  console.log(`User service is running on port ${port}`);
}
bootstrap();
