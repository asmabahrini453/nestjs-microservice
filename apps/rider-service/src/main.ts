import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
 // const app = await NestFactory.create(RiderServiceModule);
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  RiderServiceModule,{ transport: Transport.TCP,
    options: {host: 'localhost', port: 3002}
  },
 );
  app.useGlobalPipes(new ValidationPipe()); 
await app.listen();
}
bootstrap();
