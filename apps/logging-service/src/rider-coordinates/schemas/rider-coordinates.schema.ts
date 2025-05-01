import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema()
class RiderCoordinate {
  @Prop({required: true})
lat: string; //l'attitude

  @Prop({required: true})
  lng: number; //longitude

  @Prop({required: true})
  rider: number; 
}
export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);