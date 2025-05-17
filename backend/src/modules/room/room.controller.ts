import {Body, Controller, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import { RoomService } from '@modules/room/room.service';
import { User } from '@decorators';
import { RoomGuard } from '@guards';
import {CreateRoomDto} from "@modules/room/dtos/req/create-room.dto";

@UseGuards(RoomGuard)
@Controller('rooms/:homeId')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getList(@User('id') userId: number, @Req() { home }: any) {
    return this.roomService.getList(home.id, userId);
  }

  @Get(':id')
  detail(@Param('homeId') homeId: number, @Param('id') id: number) {
    return this.roomService.detail(homeId, id);
  }

  @Post()
  create(
      @Param('homeId') homeId: number,
      @Body() createRoomDto: CreateRoomDto,
  ) {
    return this.roomService.create(homeId, createRoomDto);
  }
}
