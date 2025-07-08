import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu131Service {
  getAll() { return 'menu131 - GET all'; }
  create() { return 'menu131 - POST create'; }
  update() { return 'menu131 - PUT update'; }
  remove() { return 'menu131 - DELETE remove'; }
}
