import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu122Service {
  getAll() { return 'menu122 - GET all'; }
  create() { return 'menu122 - POST create'; }
  update() { return 'menu122 - PUT update'; }
  remove() { return 'menu122 - DELETE remove'; }
}
