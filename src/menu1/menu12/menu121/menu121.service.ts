import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu121Service {
  getAll() { return 'menu121 - GET all'; }
  create() { return 'menu121 - POST create'; }
  update() { return 'menu121 - PUT update'; }
  remove() { return 'menu121 - DELETE remove'; }
}
