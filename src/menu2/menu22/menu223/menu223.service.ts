import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu223Service {
  getAll() { return 'menu223 - GET all'; }
  create() { return 'menu223 - POST create'; }
  update() { return 'menu223 - PUT update'; }
  remove() { return 'menu223 - DELETE remove'; }
}
