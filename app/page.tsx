'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  // Redirect if not signed in
  if (!user) {
    router.push('/auth/sign-in');
    return null; // prevent rendering the dashboard while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Hi, {user.firstName ?? 'Dashboard'}</h1>
        <div className="text-center mb-6">
          <p>Welcome to your Dashboard!</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
