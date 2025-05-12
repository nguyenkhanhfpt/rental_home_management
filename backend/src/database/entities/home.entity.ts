import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from '@database/entities/user.entity';
import { HomeStatus } from '@shared/enums/app.enum';
import { RoomEntity } from '@database/entities/room.entity';
import { FeeEntity } from '@database/entities/fee.entity';

@Entity({ name: 'homes' })
export class HomeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.homes)
  user: UserEntity;

  @OneToMany(() => RoomEntity, (room) => room.home)
  rooms: RoomEntity[];

  @ManyToMany(() => FeeEntity, (fee) => fee.homes)
  @JoinTable({ name: 'home_fees' })
  fees: FeeEntity[];

  @Column()
  name: string;

  @Column({ name: 'short_name' })
  shortName: string;

  @Column({ name: 'address', type: 'text' })
  address: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({
    name: 'status',
    default: HomeStatus.ACTIVE,
    type: 'enum',
    enum: HomeStatus,
  })
  status: HomeStatus;
}
