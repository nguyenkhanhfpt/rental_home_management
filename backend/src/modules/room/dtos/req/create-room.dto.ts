import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { RoomEntity } from '@database/entities/room.entity';
import { RoomStatus } from '@shared/enums/app.enum';

export class CreateRoomDto {
  public static readonly resource = RoomEntity.name;

  homeId: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  shortName: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  basePrice: number;

  @IsEnum(RoomStatus)
  status: RoomStatus = RoomStatus.ACTIVE;
}
