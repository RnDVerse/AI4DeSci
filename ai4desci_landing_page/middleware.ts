export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/auth/success",
    "/app/:path*",
    "/other/:path*",
    "/help/:path*",
  ],
};
