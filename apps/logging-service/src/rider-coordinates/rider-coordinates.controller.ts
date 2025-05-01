import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}

  @Get()
  async getRiderCoordinates() {
    return await this.coordinatesService.getRiderCoordinates();
  }

  // @Get(':id')
  // async getRiderCoordinatesById(@Param('id') id: string) {
  //   return await this.coordinatesService.getRiderCoordinatesById(id);
  // }

  @Get(':id')
  async getRiderCoordinatesById(@Param('id') id: string) {
    return await this.coordinatesService.getRiderCoordinatesById(id);
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return await this.coordinatesService.saveRiderCoordinates(
      createCoordinatesDto,
    );
  }
}
