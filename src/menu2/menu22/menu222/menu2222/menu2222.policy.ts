import { AnyMongoAbility } from '@casl/ability';
import { BasePolicy } from 'src/auth/policy/base.policy';
import { ActionsEnum } from 'src/permission/dto/permission.dto';
import { SubjectsEnum } from 'src/permission/subject.enum';

export class Menu2222Polilcy extends BasePolicy {
  protected checkAbility(
    ability: AnyMongoAbility,
    action: ActionsEnum,
  ): boolean {
    this.subject = SubjectsEnum.MENU2222;
    return super.checkAbility(ability, action);
  }
}
