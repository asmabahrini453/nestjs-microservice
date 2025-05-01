import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate,RiderCoordinateSchema } from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  //forFeature inject the mongoose models into the module here it is the rider coordinates model
  imports:[
    MongooseModule.forFeature([{name: RiderCoordinate.name, schema: RiderCoordinateSchema}]), 
    //inject rider service into the RiderCoordinatesModule
    ClientsModule.register([
      {name: 'RIDER_SERVICE', transport: Transport.TCP, options: {host: 'localhost', port: 3002}},
    ])
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
