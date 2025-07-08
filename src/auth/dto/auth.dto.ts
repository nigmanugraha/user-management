import { Permission, Role, User } from '@prisma/client';

export class LoginUserDto {
  username: string;
  password: string;
  role?: number;
}

export class RegisterUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
  roles: number[];
}

export type UserSchema = User & {
  roles?: Pick<Role, 'id' | 'name'>[];
};

export type UserContext = User & {
  role: Pick<Role, 'id' | 'name'> & {
    permissions: Pick<Permission, 'action' | 'conditions' | 'subject'>[];
  };
};
