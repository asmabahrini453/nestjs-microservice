import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectRepository(RiderCoordinate) 
    private readonly riderCoordinateRepo: Repository<RiderCoordinate>,  // Inject the default repository
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async saveRiderCoordinates(createCoordinatesDto: CreateCoordinatesDto) {
    return await this.riderCoordinateRepo.save(createCoordinatesDto);  // Use the repository's save method
  }

  async getRiderCoordinates() {
    return await this.riderCoordinateRepo.find();  // Use the repository's find method
  }

  async getRiderCoordinatesById(id: string) {
    const coordinates = await this.riderCoordinateRepo.find({ where: { riderId: id } });  // Use the repository's find method
    
    const pattern = { cmd: 'get-rider' };
    const payload = { id };
    const rider = await firstValueFrom(this.client.send(pattern, payload));
    
    return { coordinates, rider };
  }
}
