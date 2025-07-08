import { ActionsEnum } from './dto/permission.dto';
import { SubjectsEnum } from './subject.enum';

export class PresetPermission {
  static get create() {
    return new PresetPermission();
  }

  can(actionAliases: string, subject: SubjectsEnum) {
    const allowedActionsAliases = {
      r: ActionsEnum.READ,
      c: ActionsEnum.CREATE,
      u: ActionsEnum.UPDATE,
      d: ActionsEnum.DELETE,
      m: ActionsEnum.MANAGE,
    };
    const rawActions: ActionsEnum[] = actionAliases
      .split('')
      .map((alias) => allowedActionsAliases[alias]);

    const actions: Array<{
      subject: string;
      action: string;
    }> = [];
    for (const action of rawActions) {
      actions.push({
        action: action,
        subject,
      });
    }

    return actions;
  }
}
