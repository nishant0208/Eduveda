// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // run on everything except static files and special routes
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
