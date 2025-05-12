import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'home_fees' })
export class HomeFeeEntity extends BaseEntity {
  @Column({ name: 'home_id' })
  homeId: number;

  @Column({ name: 'fee_id' })
  feeId: number;

  @Column({ name: 'fee' })
  fee: number;
}
