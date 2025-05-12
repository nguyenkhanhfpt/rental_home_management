import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoomEntity } from '@database/entities/room.entity';

@Entity({ name: 'room_info' })
export class RoomInfoEntity extends BaseEntity {
  @OneToOne(() => RoomEntity, (room) => room.info)
  room: RoomEntity;

  @Column()
  price: number;

  @Column({ name: 'num_tenants', default: 1 })
  numTenants: number;

  @Column({ name: 'room_id' })
  roomId: number;
}
