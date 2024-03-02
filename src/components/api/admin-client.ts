import APIClient from "./api-client";
import Manager from "../entities/manager";

const createManager = new APIClient<Manager>("/manager/addManager");

export { createManager };
