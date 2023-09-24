import { withAuth } from "next-auth/middleware";

/**
 * Next auth middlware function to protect routes
 */
export default withAuth({
  pages: {
    signIn: "/auth/sign-in",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
});

/**
 * Next auth middleware page matcher for all pages in app page directory
 */
export const config = {
  matcher: ["/app/:path*"],
};
