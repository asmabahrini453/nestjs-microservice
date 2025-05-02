import { createClerkClient } from '@clerk/backend';
import { ConfigService } from '@nestjs/config';
//ClerkClientProvider is a custom provider that creates an instance of the Clerk client.
//It uses the ConfigService to retrieve CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY from the environment and initializes the Clerk client (createClerkClient).
//The ClerkClient is then injected wherever it's needed in your application (such as in the ClerkStrategy).
//This allows you to interact with Clerk's API for user management and authentication in your application.

export const ClerkClientProvider = {
  provide: 'ClerkClient',
  useFactory: (configService: ConfigService) => {
    return createClerkClient({
        publishableKey: configService.get('CLERK_PUBLISHABLE_KEY'),
        secretKey: configService.get('CLERK_SECRET_KEY'),
    });
  },
  inject: [ConfigService],
};