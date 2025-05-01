import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate,RiderCoordinateSchema } from './schemas/rider-coordinates.schema';

@Module({
  //forFeature inject the mongoose models into the module here it is the rider coordinates model
  imports:[
    MongooseModule.forFeature([{name: RiderCoordinate.name, schema: RiderCoordinateSchema}]), 
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
