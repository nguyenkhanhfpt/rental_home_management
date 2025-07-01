import { IsNotEmpty } from 'class-validator';

export class SaveRoomInfoDto {
  public static readonly resource = 'RoomInfo';

  roomId: number;

  @IsNotEmpty()
  numTenants: number;

  @IsNotEmpty()
  price: number;
}
