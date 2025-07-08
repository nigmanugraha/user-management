import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu222Service {
  getAll() { return 'menu222 - GET all'; }
  create() { return 'menu222 - POST create'; }
  update() { return 'menu222 - PUT update'; }
  remove() { return 'menu222 - DELETE remove'; }
}
