import { type ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './public.decorator';
// This guard is used to protect routes that require authentication using Clerk.
// It extends the NestJS AuthGuard and checks if the route is public or requires authentication.
// If the route is public, it allows access without authentication. Otherwise, it uses the Clerk authentication strategy.
//If the route isn't public, it proceeds with the normal authentication process by using Clerk's authentication strategy.
@Injectable()
export class ClerkAuthGuard extends AuthGuard('clerk') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
