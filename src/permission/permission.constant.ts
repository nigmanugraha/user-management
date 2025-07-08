import { PresetPermission } from './permission.preset';
import { SubjectsEnum } from './subject.enum';

export const PERMISSIONS = [
  ...PresetPermission.create.can('m', SubjectsEnum.ALL),
  ...PresetPermission.create.can('r', SubjectsEnum.PERMISSION),
  ...PresetPermission.create.can('crud', SubjectsEnum.ROLE),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU1),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU11),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU12),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU121),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU122),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU13),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU131),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU2),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU21),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU22),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU221),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU222),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU2221),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU2222),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU223),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU23),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU3),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU31),
  ...PresetPermission.create.can('crud', SubjectsEnum.MENU32),
];
