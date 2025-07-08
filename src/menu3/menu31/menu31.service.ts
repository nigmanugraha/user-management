import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu31Service {
  getAll() { return 'menu31 - GET all'; }
  create() { return 'menu31 - POST create'; }
  update() { return 'menu31 - PUT update'; }
  remove() { return 'menu31 - DELETE remove'; }
}
