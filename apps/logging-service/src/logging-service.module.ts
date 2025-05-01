import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  // Import the MongooseModule and connect to the MongoDB database:mongodb://<host>:<port>/<database>
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/logs_db'), RiderCoordinatesModule],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
