import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu13Service {
  getAll() { return 'menu13 - GET all'; }
  create() { return 'menu13 - POST create'; }
  update() { return 'menu13 - PUT update'; }
  remove() { return 'menu13 - DELETE remove'; }
}
