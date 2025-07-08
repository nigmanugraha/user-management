import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu23Service {
  getAll() { return 'menu23 - GET all'; }
  create() { return 'menu23 - POST create'; }
  update() { return 'menu23 - PUT update'; }
  remove() { return 'menu23 - DELETE remove'; }
}
