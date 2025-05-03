// app/auth/sign-in/[[...sign-in]]/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  console.log("SignInPage rendered");

  return (
    <div style={{ padding: "2rem" }}>
      <SignIn
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth/sign-up"
        redirectUrl="/" 
      />
    </div>
  );
}
