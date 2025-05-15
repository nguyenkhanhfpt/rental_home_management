import { IsEnum, IsNotEmpty } from 'class-validator';
import { HomeEntity } from '@database/entities/home.entity';
import { HomeStatus } from '@shared/enums/app.enum';

export class CreateHomeDto {
  public static readonly resource = HomeEntity.name;

  userId: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  shortName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsEnum(HomeStatus)
  status: HomeStatus = HomeStatus.ACTIVE;
}
