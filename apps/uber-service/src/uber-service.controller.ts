import { Controller, Get } from '@nestjs/common';
import { UberServiceService } from './uber-service.service';

@Controller()
export class UberServiceController {
  constructor(private readonly uberServiceService: UberServiceService) {}

  @Get()
  getHello(): string {
    return this.uberServiceService.getHello();
  }
}
