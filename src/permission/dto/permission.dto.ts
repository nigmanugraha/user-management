import { JsonValue } from '@prisma/client/runtime/library';

export enum ActionsEnum {
  READ = 'read',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  GIVE = 'give',
  MANAGE = 'manage', // alias for (READ & CREATE & UPDATE & DELETE)
}

export class PermissionDto {
  id: number;
  action: string;
  subject: string;
  conditions: JsonValue;
}
