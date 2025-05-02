import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class userRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  role: string;
  
  @IsString()
  @IsNotEmpty()
  clerkUserId: string;
}
