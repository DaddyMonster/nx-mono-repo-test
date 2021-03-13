import { Request, Response } from 'express';
import { Session } from 'express-session';

export interface CustomSession extends Session {
  isLogged?: boolean | null;
  userId?: number | null;
}

export interface IRequest extends Request {
  session: CustomSession;
}

export type Ctx = {
  req: IRequest;
  res: Response;
};
