import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '@database/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from '@modules/room/dtos/req/create-room.dto';
import { UpdateRoomDto } from '@modules/room/dtos/req/update-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  /**
   * Get room by id
   * @param id
   * @param homeId
   * @param select
   * @param relations
   */
  async getRoomById(
    id: number,
    homeId: number,
    select?: (keyof RoomEntity)[],
    relations?: string[],
  ): Promise<RoomEntity> {
    return this.roomRepository.findOneOrFail({
      select: select,
      relations: relations,
      where: {
        homeId,
        id,
      },
    });
  }

  /**
   * Get list of rooms by home id
   * @param homeId
   * @return {Promise<RoomEntity[]>}
   */
  async getList(homeId: number): Promise<RoomEntity[]> {
    return this.roomRepository.find({
      where: {
        homeId,
      },
    });
  }

  /**
   * Create a new room
   * @param homeId
   * @param createRoomDto
   * @return {Promise<RoomEntity>}
   */
  create(homeId: number, createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    createRoomDto.homeId = homeId;

    return this.roomRepository.save(createRoomDto);
  }

  /**
   * Update a room
   * @param id
   * @param homeId
   * @param updateRoomDto
   * @return {Promise<RoomEntity>}
   */
  async update(
    homeId: number,
    id: number,
    updateRoomDto: UpdateRoomDto,
  ): Promise<RoomEntity> {
    const room = await this.getRoomById(id, homeId);
    updateRoomDto.homeId = room.homeId;

    return this.roomRepository.save({
      ...room,
      ...updateRoomDto,
    });
  }

  /**
   * Get a room
   * @param id
   * @param homeId
   * @return {Promise<RoomEntity>}
   */
  detail(homeId: number, id: number): Promise<RoomEntity> {
    return this.getRoomById(id, homeId, null, ['home']);
  }

  /**
   * Delete a room
   * @param id
   * @param homeId
   */
  async delete(id: number, homeId: number): Promise<boolean> {
    await this.getRoomById(id, homeId);
    await this.roomRepository.delete(id);

    return true;
  }
}
