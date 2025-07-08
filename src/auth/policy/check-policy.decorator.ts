import { AnyMongoAbility } from '@casl/ability';
import { SetMetadata } from '@nestjs/common';

export const CheckPolicy = (policy: (ability: AnyMongoAbility) => boolean) =>
  SetMetadata('policy', policy);
