import { User } from "../models/users";
import * as userSer from './user';

interface LoginSerializer {
  token: string;
  user: userSer.userSerializer;
}

export const create = (token: string, user: User): LoginSerializer => {
  return {
    token: token,
    user: userSer.show(user)
  }
}