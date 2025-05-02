import { Controller, Post, Body, Param, Put, Delete, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.entity';
import { userRequestDto } from './dto/userRequestDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create user
  @Post()
  async create(@Body() data: userRequestDto): Promise<User> {
    return this.userService.createUser(data);
  }
  //update user
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: userRequestDto): Promise<User> {
    return this.userService.updateUser(id, data);  // id should be treated as a string
  }
  

  // Get all users
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  
  @Get(':clerkUserId')
  async getUserByClerkId(@Param('clerkUserId') id: string) {
    return this.userService.getUserByClerkId(id);
  }



  // Delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
