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

interface ManagerCredentials {
  userName: string;
  password: string;
}

interface ManagerPasswordCredential {
  userName: string;
  password: string;
}

const register = new APIClient<RegisterAuth>("/user/signup");
const emailVerification = new APIClient<MailVerificationAuth>(
  "/user/verification"
);
const adminLogin = new APIClient<LoginAuth>("/user/login");

const managerLogin = new APIClient<ManagerCredentials>("/manager/login");
const managerChangePassword = new APIClient<ManagerPasswordCredential>(
  "/manager/changePassword"
);

export {
  register,
  emailVerification,
  adminLogin,
  managerLogin,
  managerChangePassword,
};
