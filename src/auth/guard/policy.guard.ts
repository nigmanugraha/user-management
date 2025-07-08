import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AnyMongoAbility } from '@casl/ability';
import { ConfigService } from '@nestjs/config';
import { CaslAbilityFactory } from '../policy/casl.factory';
import { UnauthorizedError } from 'src/@shared/custom-error.exception';

@Injectable()
export class PoliciesGuard implements CanActivate {
  private enabled: boolean;

  constructor(
    private reflector: Reflector,
    private abilityFactory: CaslAbilityFactory, // Injecting the ability factory)
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      const handler = context.getHandler();
      const policyMethod: (ability: AnyMongoAbility) => boolean =
        this.reflector.get<() => boolean>('policy', handler);
      if (!policyMethod) {
        return true; // No policy defined for the route, allow by default
      }

      // Create ability for admin
      const ability = this.abilityFactory.createForUser(user);
      return policyMethod(ability);
    } catch (err) {
      throw new UnauthorizedError();
    }
  }
}
