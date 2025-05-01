import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}



  @Get()
 async getRiderCoordinates() {
    return await this.coordinatesService.getRiderCoordinates() ;
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return await this.coordinatesService.saveRiderCoordinates(createCoordinatesDto);

  }
}
