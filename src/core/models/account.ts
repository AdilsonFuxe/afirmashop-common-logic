import {Roles, Session, Status} from "./types";

export type Account = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessions: Session[];
  forgotPasswordAccessToken: number;
  forgotPasswordExpiresIn: Date;
  createdAt: Date;
  updatedAt: Date;
  roles: readonly Roles[]
  status: Status
};
