import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from '@database/entities/user.entity';
import { HomeStatus } from '@shared/enums/app.enum';

@Entity({ name: 'homes' })
export class HomeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.homes)
  user: UserEntity;

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
