import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiderCoordinate } from './rider-coordinates/schemas/rider-coordinates.schema';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [ RiderCoordinatesModule, 
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost', 
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'microservice_db',
        entities: [RiderCoordinate], // Ensure that your entities are included
        synchronize: true, // Set to false in production!
      }),
    }),
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
