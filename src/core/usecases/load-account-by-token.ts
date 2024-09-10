import {LoadAccountByToken} from "../../ports/in";
import {LoadAccountByTokenRepository} from "../../ports/out/db";
import {Decrypt} from "../../ports/out/cryptography";


type Dependencies = {
  loadAccountByTokenRepository: LoadAccountByTokenRepository;
  decrypt: Decrypt;
};

type BuildDbLoadAccountByToken = (
  dependencies: Dependencies
) => LoadAccountByToken;


export const loadAccountByToken: BuildDbLoadAccountByToken =
  ({loadAccountByTokenRepository, decrypt}) =>
    async (accessToken) => {
      const decryptedToken = await decrypt(accessToken);
      if (decryptedToken) {
        return await loadAccountByTokenRepository(accessToken);
      }
      return null;
    };
