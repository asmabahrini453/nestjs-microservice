import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinatesDto {
  @IsNumber()
  @IsNotEmpty()
  lat: number;  // latitude

  @IsNumber()
  @IsNotEmpty()
  lng: number;  // longitude

  @IsString()
  @IsNotEmpty()
  riderId: string;
}
