import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { HomeEntity } from '@database/entities/home.entity';

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
}
