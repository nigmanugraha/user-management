import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu11Service {
  getAll() { return 'menu11 - GET all'; }
  create() { return 'menu11 - POST create'; }
  update() { return 'menu11 - PUT update'; }
  remove() { return 'menu11 - DELETE remove'; }
}
