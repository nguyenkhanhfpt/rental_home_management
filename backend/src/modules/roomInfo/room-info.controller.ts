import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RoomInfoService } from './room-info.service';
import { RoomGuard } from '@guards';
import { SaveRoomInfoDto } from '@modules/roomInfo/dtos/req/save-room-info.dto';
import { RoomInfoEntity } from '@database/entities/room-info.entity';

@UseGuards(RoomGuard)
@Controller('room-info/:roomId')
export class RoomInfoController {
  constructor(private readonly roomInfoService: RoomInfoService) {}

  @Post()
  saveRoomInfo(
    @Req() { room }: any,
    @Body() saveRoomInfoDto: SaveRoomInfoDto,
  ): Promise<RoomInfoEntity> {
    return this.roomInfoService.saveRoomInfo(room, saveRoomInfoDto);
  }

  @Post('delete')
  deleteRoomInfo(@Req() { room }: any): Promise<boolean> {
    return this.roomInfoService.deleteRoomInfo(room);
  }
}
