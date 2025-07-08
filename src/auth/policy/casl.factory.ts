import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { UserContext } from '../dto/auth.dto';
import { ActionsEnum } from 'src/permission/dto/permission.dto';
import { SubjectsEnum } from 'src/permission/subject.enum';

@Injectable()
export class CaslAbilityFactory {
  public createForUser(user: UserContext) {
    try {
      const { can, build } = new AbilityBuilder(createMongoAbility);
      const permissions = user.role.permissions;
      permissions.forEach((permission) => {
        const { action, subject } = permission;
        can(action, subject);
      });

      return build();
    } catch (error) {
      throw error;
    }
  }
}
