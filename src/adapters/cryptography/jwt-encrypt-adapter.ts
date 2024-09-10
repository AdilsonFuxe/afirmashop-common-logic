import jwt from 'jsonwebtoken';
import {Encrypt} from "../../ports/out/cryptography";

export type BuildJwtEncryptAdapter = (secret: string) => Encrypt;

export const jwtEncryptAdapter: BuildJwtEncryptAdapter =
  (secret: string) => async (value: string) => {
    const accessToken = await jwt.sign({accountId: value}, secret);
    return accessToken;
  };
