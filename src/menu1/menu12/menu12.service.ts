import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu12Service {
  getAll() { return 'menu12 - GET all'; }
  create() { return 'menu12 - POST create'; }
  update() { return 'menu12 - PUT update'; }
  remove() { return 'menu12 - DELETE remove'; }
}
