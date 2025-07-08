import { Permission, Role, User } from '@prisma/client';

export type RoleSchema = Role & {
  permissions?: Pick<Permission, 'subject' | 'action' | 'conditions'>[];
  users?: Pick<User, 'id' | 'name'>[];
};
