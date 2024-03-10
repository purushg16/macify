import { PropertyBed } from "./property";

export interface AvailableResponse {
  beds: PropertyBed[];
  roomId: string;
  roomName: string;
}
