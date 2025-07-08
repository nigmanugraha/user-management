import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu2Service {
  getAll() { return 'menu2 - GET all'; }
  create() { return 'menu2 - POST create'; }
  update() { return 'menu2 - PUT update'; }
  remove() { return 'menu2 - DELETE remove'; }
}
