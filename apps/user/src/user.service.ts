import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './schema/user.entity';
import { userRequestDto } from './dto/userRequestDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async getUserByClerkId(clerkUserId: string) {
    return this.userRepo.findOne({ where: { clerkUserId } });
  }

  
  // Get all users
  async getAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  // Delete user
  async deleteUser(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }

 // Create user
 async createUser(data: userRequestDto & { clerkUserId: string }) {
  const newUser = this.userRepo.create(data); // Convert to User entity
  return this.userRepo.save(newUser);
}

// In UserService

async updateUser(id: string, data: userRequestDto): Promise<User> {
  const user = await this.userRepo.findOne({ where: { id } });  // Ensure 'id' is passed as a string
  if (!user) {
    throw new Error('User not found');
  }

  // Update user with provided data
  const updatedUser = { ...user, ...data };
  return this.userRepo.save(updatedUser);
}

}
