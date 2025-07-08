import { Injectable } from '@nestjs/common';

@Injectable()
export class Menu3Service {
  getAll() { return 'menu3 - GET all'; }
  create() { return 'menu3 - POST create'; }
  update() { return 'menu3 - PUT update'; }
  remove() { return 'menu3 - DELETE remove'; }
}
