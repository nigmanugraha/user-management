import { PresetPermission } from 'src/permission/permission.preset';
import { SubjectsEnum } from 'src/permission/subject.enum';

export const ROLES = [
  {
    name: 'RoleMenu1',
    permissions: [
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU1),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU11),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU12),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU121),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU122),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU13),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU131),
    ],
  },
  {
    name: 'RoleMenu122',
    permissions: [
      ...PresetPermission.create.can('r', SubjectsEnum.MENU1),
      ...PresetPermission.create.can('r', SubjectsEnum.MENU12),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU122),
    ],
  },
  {
    name: 'RoleMenu2',
    permissions: [
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU2),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU21),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU22),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU221),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU222),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU2221),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU2222),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU223),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU223),
    ],
  },
  {
    name: 'RoleMenu2222',
    permissions: [
      ...PresetPermission.create.can('r', SubjectsEnum.MENU2),
      ...PresetPermission.create.can('r', SubjectsEnum.MENU22),
      ...PresetPermission.create.can('r', SubjectsEnum.MENU222),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU2222),
    ],
  },
  {
    name: 'RoleMenu3',
    permissions: [
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU3),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU31),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU32),
    ],
  },
  {
    name: 'RoleMenu32',
    permissions: [
      ...PresetPermission.create.can('r', SubjectsEnum.MENU3),
      ...PresetPermission.create.can('crud', SubjectsEnum.MENU32),
    ],
  },
];
