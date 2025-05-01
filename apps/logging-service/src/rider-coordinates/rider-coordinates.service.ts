import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/CreateCoordinatesDto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  //all dependency inection happens in constructor
  constructor(
    @InjectModel(RiderCoordinate.name) //Inject the model into the service
    private readonly riderCoordinateModel: Model<RiderCoordinate>, //Model is a generic type that takes the model name as a parameter
    //injecting rider service
    @Inject('RIDER_SERVICE') private client: ClientProxy, //any is used here because we are not using the rider service in this service, but we are injecting it to use it in the controller. It is a good practice to inject the service even if we are not using it in the service. This will help us to use it in the controller if needed in the future.
  ) {}

  async saveRiderCoordinates(createCoordinatesDto: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinatesDto); //create method is used to create a new document in the database, it is a prebuilt method in mongoose
  }
  async getRiderCoordinates() {
    return await this.riderCoordinateModel.find(); //find method is used to find all the documents in the database, it is a prebuilt method in mongoose
  }

  // async getRiderCoordinatesById(id: string) {
  //   const coordinates = await  this.riderCoordinateModel.find({riderId:id});
  //   //communicate with rider microservice by using the rider id
  //   const pattern = {cmd: 'get-rider'} //this is the pattern that we are going to use to communicate with the rider microservice
  //   const payload = {id:id} //this is the payloas that we are going to use to communicate with the rider microservice
  //   const rider = await firstValueFrom(this.client.send(pattern,payload)) ;
    
  //   return {coordinates, rider}

  // }

  async getRiderCoordinatesById(id: string) {
    const coordinates = await this.riderCoordinateModel.find({ riderId: id });
  
    const pattern = { cmd: 'get-rider' };
    const payload = { id };
    const rider = await firstValueFrom(this.client.send(pattern, payload));
  
    return { coordinates, rider };
  }
  
}
