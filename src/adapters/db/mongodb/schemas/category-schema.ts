import {Category, Status} from "../../../../core/models";
import {Document, Model, Schema, Types} from "mongoose";

export type CategoryDocument = Category & Document;
export type CategoryMongooseModel = Model<CategoryDocument>

export const CategorySchema = new Schema<CategoryDocument>(
  {
    _id: {
      type: Types.ObjectId,
      default: new Types.ObjectId()
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      default: Status.active,
      required: true,
    },
  },
  {timestamps: true}
);