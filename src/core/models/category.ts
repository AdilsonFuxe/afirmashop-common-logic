import {Status} from "./types";

export type Category = {
  id: string;
  name: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
};
