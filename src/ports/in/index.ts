import {Account} from "../../core/models";

export type LoadAccountByToken = (
  accessToken: string
) => Promise<LoadAccountByToken.Response>;

export namespace LoadAccountByToken {
  export type Response = Account | null;
}
