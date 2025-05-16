import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '@database/entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  getList(homeId: number, userId: number) {
    return this.roomRepository.find({
      where: {
        homeId,
      },
    });
  }

  create(homeId: number) {
    return this.roomRepository.save({
      homeId,
      name: 'dd',
      shortName: 'ddd',
      description: 'dddd',
      basePrice: 123000,
    });
  }
}
