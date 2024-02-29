import { AddPropertyBasicInterface } from "./addPropertyBasicInterface.ts.ts";
import { AddPropertyRoomInterface } from "./addPropertyRoomInterface.ts";

export interface addPropertyParams
  extends AddPropertyRoomInterface,
    AddPropertyBasicInterface {}
