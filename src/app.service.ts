import { Injectable } from '@nestjs/common';
import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly itemRepository: ItemRepository,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createItem(itemDto) {
    const item = new ItemEntity();
    item.name = itemDto.name;
    return this.itemRepository.save(item);
  }

  getItemById(id) {
    return this.itemRepository.findOne(id);
  }
}
