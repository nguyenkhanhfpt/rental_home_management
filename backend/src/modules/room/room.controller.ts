import { Controller, Get, Param, Post } from '@nestjs/common';
import { RoomService } from '@modules/room/room.service';
import { User } from '@decorators';

@Controller('rooms/:homeId')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getList(@Param('homeId') homeId: number, @User('id') userId: number) {
    return this.roomService.getList(homeId, userId);
  }

  @Post()
  create(@Param('homeId') homeId: number) {
    return this.roomService.create(homeId);
  }
}
