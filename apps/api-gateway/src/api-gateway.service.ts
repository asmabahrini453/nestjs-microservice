// api-gateway.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  constructor(@Inject('RIDER_SERVICE') private readonly riderClient: ClientProxy) {}

  async getRiderById(id: string) {
    const pattern = { cmd: 'get-rider' };
    const payload = { id };
    return firstValueFrom(this.riderClient.send(pattern, payload));
  }
}
