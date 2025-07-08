import { JsonValue } from '@prisma/client/runtime/library';

export class RoleDto {
  id: number;
  name: string;
  permissions: Array<{
    subject: string;
    action: string;
    conditions: JsonValue;
  }>;
  users: Array<{
    id: number;
    name: string;
  }>;
  created_at: string;
  updated_at?: string;
}
