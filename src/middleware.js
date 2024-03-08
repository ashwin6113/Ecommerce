import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/','/users/Allproducts'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};