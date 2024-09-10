export enum Status {
  active = 'active',
  deleted = 'deleted',
}

export enum Topics {
  categoriesEvents = 'categories-events',
  productsEvents = 'products-events',
  authenticationEvents = 'authentication-events',
  cartsEvents = 'carts-events',
  salesEvents = 'sales-events',
  customersEvents = 'customers-events',
  messageLogs = 'message-logs'
}

export enum Roles {
  Customer = 'Customer',
  Admin = 'Admin'
}

export type Session = {
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
};
