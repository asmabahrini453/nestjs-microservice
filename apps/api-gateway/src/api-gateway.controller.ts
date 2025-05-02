import { Controller, Get, Param } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller('api')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get('rider/:id')
  async getRiderById(@Param('id') id: string) {
    return this.apiGatewayService.getRiderById(id);
  }
}
