import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu221Service {
  getAll() { return 'menu221 - GET all'; }
  create() { return 'menu221 - POST create'; }
  update() { return 'menu221 - PUT update'; }
  remove() { return 'menu221 - DELETE remove'; }
}
