import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([RiderCoordinate]),  
        ClientsModule.register([
      {
        name: 'RIDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'rider_queue',
          queueOptions: { durable: false },
        },
      },
    ])
    
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
