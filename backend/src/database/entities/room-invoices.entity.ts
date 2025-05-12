import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoomEntity } from '@database/entities/room.entity';
import { RoomInvoiceStatus } from '@shared/enums/app.enum';

@Entity({ name: 'room_invoices' })
export class RoomInvoicesEntity extends BaseEntity {
  @ManyToOne(() => RoomEntity, (room) => room.invoices)
  room: RoomEntity;

  @Column({ name: 'room_id' })
  roomId: number;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'room_price' })
  roomPrice: number;

  @Column({ name: 'room_fees', type: 'jsonb' })
  roomFees: {
    name: string;
    fee: number;
  }[];

  @Column({ name: 'total_price' })
  totalPrice: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: RoomInvoiceStatus,
    default: RoomInvoiceStatus.PENDING,
  })
  status: RoomInvoiceStatus;
}
