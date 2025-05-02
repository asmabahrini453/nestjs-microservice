import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServiceService {
  getRiders() {
   return Promise.resolve({
      firstName: 'John ',
      lastName: 'Doe',
      email: "johnDoe.com",
     
     }
    );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
