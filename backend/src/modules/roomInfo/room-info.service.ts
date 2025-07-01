import { Injectable } from '@nestjs/common';
import { RoomEntity } from '@database/entities/room.entity';
import { SaveRoomInfoDto } from '@modules/roomInfo/dtos/req/save-room-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomInfoEntity } from '@database/entities/room-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomInfoService {
  constructor(
    @InjectRepository(RoomInfoEntity)
    private readonly roomInfoRepository: Repository<RoomInfoEntity>,
  ) {}

  async saveRoomInfo(
    room: RoomEntity,
    saveRoomInfoDto: SaveRoomInfoDto,
  ): Promise<RoomInfoEntity> {
    const existingRoomInfo = await this.roomInfoRepository.findOneBy({
      roomId: room.id,
    });

    return await this.roomInfoRepository.save({
      ...existingRoomInfo,
      roomId: room.id,
      numTenants: saveRoomInfoDto.numTenants,
      price: saveRoomInfoDto.price,
    });
  }

  async deleteRoomInfo(room: RoomEntity): Promise<boolean> {
    const existingRoomInfo = await this.roomInfoRepository.findOneBy({
      roomId: room.id,
    });

    if (existingRoomInfo) {
      await this.roomInfoRepository.remove(existingRoomInfo);
    }

    return true;
  }
}
