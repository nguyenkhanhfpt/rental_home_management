import { Module } from '@nestjs/common';
import { RoomInfoService } from '@modules/roomInfo/room-info.service';
import { RoomInfoController } from '@modules/roomInfo/room-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomInfoEntity } from '@database/entities/room-info.entity';
import { RoomEntity } from '@database/entities/room.entity';
import { HomeEntity } from '@database/entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomInfoEntity, RoomEntity, HomeEntity])],
  controllers: [RoomInfoController],
  providers: [RoomInfoService],
})
export class RoomInfoModule {}
