import { IsNotEmpty, IsString } from 'class-validator';
import { RoomEntity } from '@database/entities/room.entity';

export class CreateRoomDto {
  public static readonly resource = RoomEntity.name;

  homeId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  shortName: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  basePrice: number;
}
