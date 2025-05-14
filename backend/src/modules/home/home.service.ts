import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HomeEntity } from '@database/entities/home.entity';
import { HomeStatus } from '@shared/enums/app.enum';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(HomeEntity)
    private readonly homeRepository: Repository<HomeEntity>,
  ) {}

  async getList(userId: number): Promise<HomeEntity[]> {
    return this.homeRepository.find({
      where: {
        userId,
      },
    });
  }

  async createNewHome(userId: number): Promise<HomeEntity> {
    return this.homeRepository.save({
      userId,
      name: 'New Home',
      shortName: 'New Home',
      address: 'New Home',
      status: HomeStatus.BUILDING,
    });
  }
}
