// export { default } from "next-auth/middleware";

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/auth/success",
//     "/app/:path*",
//     "/other/:path*",
//     "/help/:path*",
//   ],
// };
