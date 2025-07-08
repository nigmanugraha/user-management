import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu2222Service {
  getAll() { return 'menu2222 - GET all'; }
  create() { return 'menu2222 - POST create'; }
  update() { return 'menu2222 - PUT update'; }
  remove() { return 'menu2222 - DELETE remove'; }
}
