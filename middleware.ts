// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [ "/","/auth/sign-in", "/auth/sign-up",'/auth/sign-up/verify-email-address',"/auth/sign-in/factor-one"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
