import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiderCoordinate } from './rider-coordinates/schemas/rider-coordinates.schema';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { ClerkClientProvider } from 'apps/auth-service/src/clerk/clerk-client.provider';
import { ConfigModule } from '@nestjs/config';
import { AuthServiceModule } from 'apps/auth-service/src/auth-service.module';
import { APP_GUARD } from '@nestjs/core';
import { ClerkAuthGuard } from 'apps/auth-service/src/clerk/clerk-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthServiceModule,

    RiderCoordinatesModule,
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
  providers: [
    LoggingServiceService,
    ClerkClientProvider,
    {
      provide: APP_GUARD,
      useClass: ClerkAuthGuard, // Enforces Clerk authentication for all routes in this module
    },
  ],
})
export class LoggingServiceModule {}
