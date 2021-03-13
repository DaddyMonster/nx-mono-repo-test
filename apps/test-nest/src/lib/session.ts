import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import { COOKIE_NAME, NODE_ENV, SESSION_SECRET } from '../environments/env';
import { getRedis } from './redis';

export const RedisStore = connectRedis(session);

const sessionRedis = getRedis();
export const appSession = session({
  name: COOKIE_NAME,
  store: new RedisStore({
    client: sessionRedis,
    disableTouch: true,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 96,
    httpOnly: true,
    sameSite: 'lax',
    secure: NODE_ENV === 'production',
  },
  rolling: true,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  resave: false,
});
