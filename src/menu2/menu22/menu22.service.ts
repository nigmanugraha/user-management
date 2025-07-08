import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu22Service {
  getAll() { return 'menu22 - GET all'; }
  create() { return 'menu22 - POST create'; }
  update() { return 'menu22 - PUT update'; }
  remove() { return 'menu22 - DELETE remove'; }
}
