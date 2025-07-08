import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedError } from 'src/@shared/custom-error.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
      throw new UnauthorizedError('No token provided');
    }

    const token = authToken.split(' ')[1];

    try {
      // Verify the JWT token
      const decoded = this.jwtService.verify(token);
      if (decoded.type !== 'access') {
        throw new UnauthorizedError('Invalid token type');
      }
      // Find the user in the database by ID or other unique identifier and exclude the password
      const user = await this.prisma.user.findUnique({
        where: {
          id: parseInt(decoded.id),
        },
        include: {
          roles: {
            select: {
              id: true,
              name: true,
              permissions: {
                select: {
                  action: true,
                  subject: true,
                  conditions: true,
                },
              },
            },
          },
        },
        omit: {
          password: true,
        },
      });

      if (!user) {
        throw new UnauthorizedError();
      }

      const selectedRole = user.roles.find(
        (role) => role.id === decoded.role.id,
      );
      if (!selectedRole) {
        throw new UnauthorizedError('User role not exist');
      }

      const { roles, ...userWithoutRoles } = user;

      const contextUser = {
        ...userWithoutRoles,
        role: selectedRole,
      };

      // Attach the user object to the request for further usage in the controller
      request.user = contextUser;
      return true;
    } catch (err) {
      throw err;
    }
  }
}
