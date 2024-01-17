import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  authRoutes,
  apiAuthPrefix,
  publicRoutes,
  DEFAULT_ISLOGIN_REDIRECT,
} from "@/routes";
export const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    // const isLoggedIn = !!req.auth;
    const isLoggedIn = true;
  
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  
    if (isApiAuthRoute) {

    }
    if(isLoggedIn){
        if(isAuthRoute){
            return Response.redirect(new URL(DEFAULT_ISLOGIN_REDIRECT, nextUrl)) 
        }
    }else{
        if(isApiAuthRoute){
            return Response.redirect(new URL(DEFAULT_ISLOGIN_REDIRECT, nextUrl)) 
        }
    }
    
    if (isAuthRoute) {
      if (!isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_ISLOGIN_REDIRECT, nextUrl))
      }
      return null;
    }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
