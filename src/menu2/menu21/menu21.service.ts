import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu21Service {
  getAll() { return 'menu21 - GET all'; }
  create() { return 'menu21 - POST create'; }
  update() { return 'menu21 - PUT update'; }
  remove() { return 'menu21 - DELETE remove'; }
}
