import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @MessagePattern({ cmd: 'get-rider' }) 
  getRidersById(
   data:any
  ) {
     return Promise.resolve({
      _id: data.id,
      firstName: 'John ',
      lastName: 'Doe',
      email: "johnDoe.com",
     
     }
    );
   }
}
