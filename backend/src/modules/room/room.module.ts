import { Module } from '@nestjs/common';
import { RoomEntity } from '@database/entities/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from '@modules/room/room.controller';
import { RoomService } from '@modules/room/room.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
