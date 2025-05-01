import { Module } from '@nestjs/common';
import { UberServiceController } from './uber-service.controller';
import { UberServiceService } from './uber-service.service';

@Module({
  imports: [],
  controllers: [UberServiceController],
  providers: [UberServiceService],
})
export class UberServiceModule {}
