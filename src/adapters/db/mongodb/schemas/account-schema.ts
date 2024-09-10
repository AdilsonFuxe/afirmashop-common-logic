import {Account, Roles, Status} from "../../../../core/models";
import {Document, Model, Schema, Types} from "mongoose";

export const SessionSchema = new Schema(
  {
    accessToken: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export type AccountDocument = Account & Document
export type AccountMongooseModel = Model<AccountDocument>

export const AccountSchema = new Schema<AccountDocument>(
  {
    _id: {
      type: Types.ObjectId,
      default: new Types.ObjectId()
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'password must be at least 6 characters'],
    },
    sessions: {
      type: [SessionSchema],
      default: [],
    },
    forgotPasswordAccessToken: {
      type: Number,
    },
    forgotPasswordExpiresIn: {
      type: Date,
    },
    roles: {
      type: [String],
      default: [Roles.Customer],
      required: true,
    },
    status: {
      type: String,
      default: Status.active,
      required: true,
    },
  },
  {timestamps: true}
);