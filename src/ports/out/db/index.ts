import {LoadAccountByToken} from "../../in";

export type LoadAccountByTokenRepository = (
  accessToken: string
) => Promise<LoadAccountByTokenRepository.Response>;

export namespace LoadAccountByTokenRepository {
  export type Response = LoadAccountByToken.Response;
}
