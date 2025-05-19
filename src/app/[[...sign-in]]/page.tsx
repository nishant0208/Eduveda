"use client";

import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const role = user?.publicMetadata.role;
      console.log("User Role:", role);

      if (role) {
        setLoading(true);
        setTimeout(() => {
          router.push(`/${role}`);
        }, 500); // Small delay for smoother UX
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-secondary">
        <div className="flex flex-col items-center gap-4">
          <Image src="/logo.png" alt="Eduveda" width={50} height={50} />
          <p className="text-lg text-gray-600">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-secondary">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-500 text-white my-1 rounded-md text-sm p-[10px]",
            formFieldInput: "p-2 rounded-md ring-1 ring-gray-300",
          },
        }}
      />
    </div>
  );
};

export default LoginPage;
