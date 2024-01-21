import { db } from "../lib/db";

/* GET TOKEN BY EMAIL
 * params : email:string
 * RETURN type {}
 */

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};


/* GET TOKEN BY TOKEN
 * params : token:string
 * RETURN type {}
 */

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};
