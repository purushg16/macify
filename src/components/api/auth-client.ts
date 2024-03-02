import APIClient from "./api-client";

export interface RegisterAuth {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface MailVerificationAuth {
  email: string;
  otp: string;
}

export interface LoginAuth {
  email: string;
  password: string;
}

const register = new APIClient<RegisterAuth>("/user/signup");
const emailVerification = new APIClient<MailVerificationAuth>(
  "/user/verification"
);
const adminLogin = new APIClient<LoginAuth>("/user/login");

export { register, emailVerification, adminLogin };
