import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HomeService } from '@modules/home/home.service';
import { User } from '@decorators';
import { HomeEntity } from '@database/entities/home.entity';
import { CreateHomeDto } from '@modules/home/dtos/req/create-home.dto';
import { UpdateHomeDto } from '@modules/home/dtos/req/update-home.dto';
import { DeleteResult } from 'typeorm';

@Controller('homes')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getList(@User('id') userId: number): Promise<HomeEntity[]> {
    return this.homeService.getList(userId);
  }

  @Get(':id')
  getDetail(
    @Param('id') id: number,
    @User('id') userId: number,
  ): Promise<HomeEntity> {
    return this.homeService.getDetail(id, userId);
  }

  @Post()
  create(
    @Body() createHomeDto: CreateHomeDto,
    @User('id') userId: number,
  ): Promise<HomeEntity> {
    return this.homeService.createNewHome(userId, createHomeDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateHomeDto: UpdateHomeDto,
    @User('id') userId: number,
  ): Promise<HomeEntity> {
    return this.homeService.updateHome(id, userId, updateHomeDto);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
    @User('id') userId: number,
  ): Promise<DeleteResult> {
    return this.homeService.deleteHome(id, userId);
  }
}
