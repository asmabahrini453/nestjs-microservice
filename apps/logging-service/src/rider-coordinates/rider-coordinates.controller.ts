import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}

  @Post()
  async saveRiderCoordinates(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return await this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDto);
  }

  @Get()
  async getRiderCoordinates() {
    return await this.riderCoordinatesService.getRiderCoordinates();
  }

  @Get(':id')
  async getRiderCoordinatesById(@Param('id') id: string) {
    return await this.riderCoordinatesService.getRiderCoordinatesById(id);
  }
}
