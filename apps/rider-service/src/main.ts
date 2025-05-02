import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module'; // This should match the file name exactly
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule); // HTTP app
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'rider_queue',
      queueOptions: { durable: false },
    },
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservices();

  await app.listen(3002);
}
bootstrap();
