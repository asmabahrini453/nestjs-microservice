import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  @Get('me')
  async getProfile(user: any) {
    return user;
  }
}
