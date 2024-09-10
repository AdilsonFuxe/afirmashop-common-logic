import {Product, Status} from "../../../../core/models";
import {Document, Model, Schema, Types} from "mongoose";
import {Schemas} from "./schemas";

export type ProductDocument = Product & Document

export type ProductMongooseModel = Model<ProductDocument>

export const ProductSchema = new Schema<ProductDocument>(
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
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    categoryId: {
      type: String,
      ref: Schemas.categories
    },
    amount: {
      type: Number,
      default: 0,
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