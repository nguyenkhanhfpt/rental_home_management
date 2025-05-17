import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '@database/entities/room.entity';
import { Repository } from 'typeorm';
import { HomeEntity } from '@database/entities/home.entity';
import {CreateRoomDto} from "@modules/room/dtos/req/create-room.dto";

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  /**
   * Get list of rooms by home id
   * @param userId
   * @param homeId
   */
  async getList(homeId: number, userId: number) {
    return this.roomRepository.find({
      where: {
        homeId,
      },
    });
  }

  create(homeId: number, createRoomDto: CreateRoomDto) {
    createRoomDto.homeId = homeId;

    return this.roomRepository.save(createRoomDto);
  }

  detail(homeId: number, id: number) {
    return this.roomRepository.findOneOrFail({
      where: {
        id,
        homeId,
      },
    });
  }
}
