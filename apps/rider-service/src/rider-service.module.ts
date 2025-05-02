import { Module } from '@nestjs/common';
import { RiderServiceController } from './rider-service.controller';
import { RiderServiceService } from './rider-service.service';
import { ClerkClientProvider } from 'apps/auth-service/src/clerk/clerk-client.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RiderServiceController],
  providers: [RiderServiceService, ClerkClientProvider],
})
export class RiderServiceModule {}
