import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { HomeEntity } from '@database/entities/home.entity';
import { CreateHomeDto } from '@modules/home/dtos/req/create-home.dto';
import { UpdateHomeDto } from '@modules/home/dtos/req/update-home.dto';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(HomeEntity)
    private readonly homeRepository: Repository<HomeEntity>,
  ) {}

  async getList(userId: number): Promise<HomeEntity[]> {
    return this.homeRepository.find({
      relations: ['rooms'],
      where: {
        userId,
      },
    });
  }

  /**
   * Get home by id
   * @param id
   * @param userId
   */
  async getDetail(id: number, userId: number): Promise<HomeEntity> {
    return this.getHomeById(id, userId);
  }

  /**
   * Get home by id
   * @param id
   * @param userId
   * @param select
   * @param relations
   */
  async getHomeById(
    id: number,
    userId: number,
    select?: (keyof HomeEntity)[],
    relations?: string[],
  ): Promise<HomeEntity> {
    return this.homeRepository.findOneOrFail({
      select: select,
      relations: relations,
      where: {
        userId,
        id,
      },
    });
  }

  /**
   * Create a new home
   * @param userId
   * @param createHomeDto
   */
  async createNewHome(
    userId: number,
    createHomeDto: CreateHomeDto,
  ): Promise<HomeEntity> {
    createHomeDto.userId = userId;

    return this.homeRepository.save(createHomeDto);
  }

  /**
   * Update home
   * @param id
   * @param userId
   * @param updateHomeDto
   */
  async updateHome(
    id: number,
    userId: number,
    updateHomeDto: UpdateHomeDto,
  ): Promise<HomeEntity> {
    const home = await this.getHomeById(id, userId);

    return this.homeRepository.save({
      ...home,
      ...updateHomeDto,
    });
  }

  /**
   * Delete home
   * @param id
   * @param userId
   */
  async deleteHome(id: number, userId: number): Promise<DeleteResult> {
    await this.getHomeById(id, userId, ['id']);

    return this.homeRepository.delete(id);
  }
}
