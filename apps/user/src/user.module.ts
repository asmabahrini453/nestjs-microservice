import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './schema/user.entity';
import { ClerkWebhookController } from './clerk-webhook.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes env vars available everywhere
    }),
    // Configure TypeOrmModule to connect to PostgreSQL
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root', // Update these to your actual database credentials
        password: 'root',
        database: 'microservice_db',
        entities: [User],
        synchronize: true, // Be careful with this in production
      }),
    }),
    // Register User repository with TypeOrmModule for the current module
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController, ClerkWebhookController],
  providers: [UserService],
})
export class UserModule {}
