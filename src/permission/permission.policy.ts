import { AnyMongoAbility } from '@casl/ability';
import { BasePolicy } from 'src/auth/policy/base.policy';
import { ActionsEnum } from './dto/permission.dto';
import { SubjectsEnum } from './subject.enum';

export class PermissionPolicy extends BasePolicy {
  protected checkAbility(
    ability: AnyMongoAbility,
    action: ActionsEnum,
  ): boolean {
    this.subject = SubjectsEnum.PERMISSION;
    return super.checkAbility(ability, action);
  }
}
