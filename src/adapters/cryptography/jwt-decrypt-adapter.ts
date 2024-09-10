import jwt from 'jsonwebtoken';
import {Decrypt} from "../../ports/out/cryptography";

type BuildJwtDecryptAdapter = (secret: string) => Decrypt;


export const jwtDecryptAdapter: BuildJwtDecryptAdapter =
  (secret: string) => async (token: string) => {
    console.log(secret);
    console.log(token);
    console.log(jwt);
    const value: any = await jwt.verify(token, secret);
    return value?.accountId;
  };
