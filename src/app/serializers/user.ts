import { User } from "../models/users";

export interface userSerializer {
  firstName: string;
  lastName: string;
  fullName: string;
}

export const show = (user: User): userSerializer => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName} ${user.lastName}`
  }
};

export const index = (users: Array<User>): Array<userSerializer> => {
  return users.map((user: User) => show(user))
};

