import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu32Service {
  getAll() { return 'menu32 - GET all'; }
  create() { return 'menu32 - POST create'; }
  update() { return 'menu32 - PUT update'; }
  remove() { return 'menu32 - DELETE remove'; }
}
