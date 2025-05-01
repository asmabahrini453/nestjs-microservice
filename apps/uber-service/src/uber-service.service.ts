import { Injectable } from '@nestjs/common';

@Injectable()
export class UberServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
