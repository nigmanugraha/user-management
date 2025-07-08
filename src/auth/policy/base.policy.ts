import { AnyMongoAbility } from '@casl/ability';
import { ActionsEnum } from 'src/permission/dto/permission.dto';

export class BasePolicy {
  protected subject: string;
  protected allowedActions: Array<ActionsEnum | string> = [
    ActionsEnum.CREATE,
    ActionsEnum.READ,
    ActionsEnum.UPDATE,
    ActionsEnum.DELETE,
    ActionsEnum.MANAGE,
  ];
  constructor(protected readonly data?: { tenantIdKey?: string }) {}

  protected checkAbility(ability: AnyMongoAbility, action: string) {
    return ability.can(action, this.subject);
  }

  public dynamicActionAbility(action: string) {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, action);
    };
  }

  get Read() {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, ActionsEnum.READ);
    };
  }

  get Update() {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, ActionsEnum.UPDATE);
    };
  }

  get Create() {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, ActionsEnum.CREATE);
    };
  }

  get Delete() {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, ActionsEnum.DELETE);
    };
  }

  get Manage() {
    return (ability: AnyMongoAbility) => {
      return this.checkAbility(ability, ActionsEnum.MANAGE);
    };
  }
}
