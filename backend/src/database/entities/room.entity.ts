import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoomStatus } from '@shared/enums/app.enum';
import { HomeEntity } from '@database/entities/home.entity';
import { RoomInfoEntity } from '@database/entities/room-info.entity';
import { RoomInvoicesEntity } from '@database/entities/room-invoices.entity';

@Entity({ name: 'rooms' })
export class RoomEntity extends BaseEntity {
  @ManyToOne(() => HomeEntity, (home) => home.rooms)
  @JoinColumn({ name: 'home_id' })
  home: HomeEntity;

  @OneToOne(() => RoomInfoEntity, (roomInfo) => roomInfo.room)
  info: RoomInfoEntity;

  @OneToMany(() => RoomInvoicesEntity, (roomInvoices) => roomInvoices.room)
  invoices: RoomInvoicesEntity[];

  @Column()
  name: string;

  @Column({ name: 'short_name' })
  shortName: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'home_id' })
  homeId: number;

  @Column({ name: 'base_price' })
  basePrice: number;

  @Column({
    name: 'status',
    default: RoomStatus.ACTIVE,
    type: 'enum',
    enum: RoomStatus,
  })
  status: RoomStatus;
}
