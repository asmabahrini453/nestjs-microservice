import { IsNotEmpty, IsNumber,IsString } from "class-validator";

export class CreateCoordinatesDto{
    @IsNumber()
    @IsNotEmpty()
    lng: number;

    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsString()
    @IsNotEmpty()
    riderId: string ;
}