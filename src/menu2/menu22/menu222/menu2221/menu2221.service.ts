import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu2221Service {
  getAll() { return 'menu2221 - GET all'; }
  create() { return 'menu2221 - POST create'; }
  update() { return 'menu2221 - PUT update'; }
  remove() { return 'menu2221 - DELETE remove'; }
}
