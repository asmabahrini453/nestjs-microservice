
import { SetMetadata } from '@nestjs/common';

// This decorator is used to mark a route as public, meaning it doesn't require authentication.
//The ClerkAuthGuard checks this metadata to determine if the route should be accessible without authentication.
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);