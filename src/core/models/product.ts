import {Status} from "./types";

export type Product = {
  id: string;
  name: string,
  status: Status,
  price: number,
  amount: number;
  categoryId: string,
  createdAt: Date;
  updatedAt: Date;
}