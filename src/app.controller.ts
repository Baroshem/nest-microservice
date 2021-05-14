import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ItemDto } from './item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  createItem(@Body() itemDto: ItemDto) {
    return this.appService.createItem(itemDto)
  }

  @Get('item/:id')
  getItemById(@Param('id') id: number) {
    return this.appService.getItemById(id);
  }
}
