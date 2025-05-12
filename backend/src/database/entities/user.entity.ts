import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { HomeEntity } from '@database/entities/home.entity';
import { UserInfoEntity } from '@database/entities/user-info.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: 'password' })
  password: string;

  @OneToMany(() => HomeEntity, (home) => home.user)
  homes: HomeEntity[];

  @OneToOne(() => UserInfoEntity, (userInfo) => userInfo.user)
  info: UserInfoEntity;
}
