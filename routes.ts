/**
 * An array  of routes that are accessible to the public
 * Theseroutes do no require authentication
 * @type {string[]}
 */

export const publicRoutes:string[] = ["/","/auth/new-verification","/auth/reset"];

/**
 * An array  of routes that are use fpr authentication 
 * Theseroutes do no require authentication
 * @type {string[]}
 */ 

export const authRoutes: string[] = ["/auth/login", "/auth/register","/auth/error","/auth/reset","/auth/new-password"];


/**
 * An array  of routes that are use fpr authentication 
 * Theseroutes that start with this prefix ares used for API authentication purposes 
 * @type {string[]}
 */
export const apiAuthPrefix: string = "/api/auth";

/*
* The default redirect path after logging in | users is login
*/

export const DEFAULT_ISLOGIN_REDIRECT = "/settings"


