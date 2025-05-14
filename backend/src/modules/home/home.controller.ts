import { Controller, Get, Post } from '@nestjs/common';
import { HomeService } from '@modules/home/home.service';
import { User } from '@decorators';
import { HomeEntity } from '@database/entities/home.entity';

@Controller('homes')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getLists(@User('id') userId: number): Promise<HomeEntity[]> {
    return this.homeService.getList(userId);
  }

  @Post()
  create(@User() user: any, @User('id') userId: number): Promise<HomeEntity> {
    return this.homeService.createNewHome(userId);
  }
}
