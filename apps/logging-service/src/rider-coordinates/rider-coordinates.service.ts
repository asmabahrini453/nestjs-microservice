import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
//all dependency inection happens in constructor
    constructor(
        @InjectModel(RiderCoordinate.name)//Inject the model into the service
        private readonly riderCoordinateModel: Model<RiderCoordinate>,//Model is a generic type that takes the model name as a parameter
    ) {}

  async saveRiderCoordinates(createCoordinatesDto: CreateCoordinatesDto) {
   return await this.riderCoordinateModel.create(createCoordinatesDto); //create method is used to create a new document in the database, it is a prebuilt method in mongoose
  }
  async getRiderCoordinates() {
    return await this.riderCoordinateModel.find(); //find method is used to find all the documents in the database, it is a prebuilt method in mongoose
  }
}
