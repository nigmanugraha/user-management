import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NotFoundError } from './custom-error.exception';
import * as bcrypt from 'bcrypt';

// Simplify query with this catch
export function handlePrismaNotFound(model: string, error: any) {
  if (
    error instanceof PrismaClientKnownRequestError &&
    error.code === 'P2025'
  ) {
    throw new NotFoundError(`${model} not found`);
  }
  throw error;
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}
