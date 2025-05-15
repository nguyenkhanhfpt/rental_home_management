import { IsNotEmpty, Matches } from 'class-validator';
import { UserEntity } from '@database/entities/user.entity';
import { IsExistEmail } from '@shared/validators';
import { ValidateConstant } from '@shared/constants/validate.constant';

export class RegisterDto {
  public static resource = UserEntity.name;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Matches(ValidateConstant.REGEX_EMAIL)
  @IsExistEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
