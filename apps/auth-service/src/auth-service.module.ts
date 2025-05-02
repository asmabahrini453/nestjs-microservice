import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { ClerkStrategy } from './clerk/clerk.strategy';
import { ClerkClientProvider } from './clerk/clerk-client.provider';

@Module({
  //PassportModule:Used for integrating Passport.js, which is a popular authentication middleware. It simplifies user authentication in Node.js.
  //ConfigModule:Used for managing application configuration. It allows you to load environment variables and access them in your application.
  //ClerkStrategy:Custom strategy for authenticating users with Clerk, a user management service.ticate users via Clerk's authentication system.
  //ClerkClientProvider:Provides a Clerk client instance with your Clerk API credentials (like CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY) for making API calls to Clerk's services.
  imports: [PassportModule, ConfigModule],
  controllers: [AuthServiceController],
  providers: [AuthServiceService, ClerkStrategy, ClerkClientProvider],
})
export class AuthServiceModule {}
