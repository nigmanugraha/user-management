import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu1Service {
  getAll() { return 'menu1 - GET all'; }
  create() { return 'menu1 - POST create'; }
  update() { return 'menu1 - PUT update'; }
  remove() { return 'menu1 - DELETE remove'; }
}
