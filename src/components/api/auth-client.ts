import RegisterCredentials from "../entities/RegisterCredentials";
import { MailVerificationCreditials } from "../entities/MailVerificationCreditials";
import APIClient from "./api-client";
import { AdminCredentials } from "../entities/AdminCredentials";
import { ManagerCredentials } from "../entities/ManagerCredentials";
import { ManagerPasswordCredential } from "../entities/ManagerPasswordCredential";

const register = new APIClient<RegisterCredentials>("/user/signup");
const emailVerification = new APIClient<MailVerificationCreditials>(
  "/user/verification"
);
const adminLogin = new APIClient<AdminCredentials>("/user/login");

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
