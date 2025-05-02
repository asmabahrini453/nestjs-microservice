import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller("rider")
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}
  @Get()
  getRiders() {
    return this.riderServiceService.getRiders();}

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
