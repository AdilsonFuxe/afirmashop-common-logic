import {Roles} from "../../../core/models";
import {NextFunction, Request, Response} from "express";
import {LoadAccountByToken} from "../../../ports/in";

type Params = {
  loadAccountByToken: LoadAccountByToken;
  roles?: Roles[]
}

export const authMiddleWare = (params: Params) => async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers?.authorization;

  if (!header) {
    return res.status(401).json({error: "user without authorization to access the requested resource"});
  }

  const accessToken = header.replace(/^Bearer\s+/, '');

  if (!accessToken) {
    return res.status(401).json({error: "user without authorization to access the requested resource"});
  }

  const {loadAccountByToken} = params;

  const account = await loadAccountByToken(accessToken);

  if (!account) {
    return res.status(401).json({error: "user without authorization to access the requested resource"});
  }

  if (params?.roles?.length) {
    const role = account.roles.find(role => params.roles?.includes(role));
    if (!role)
      return res.status(403).json({error: "user without permission to access the requested resource"});
  }

  Object.assign(req, {accountId: account.id});
  next();

}