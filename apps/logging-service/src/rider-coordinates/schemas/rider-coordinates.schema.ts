import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate {
  @Prop({required: true})
  lat: number; //l'attitude

  @Prop({required: true})
  lng: number; //longitude

  @Prop({required: true})
  riderId: string; 
}
export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);