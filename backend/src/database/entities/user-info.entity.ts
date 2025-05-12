import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from '@database/entities/user.entity';

@Entity({ name: 'user_info' })
export class UserInfoEntity extends BaseEntity {
  @OneToOne(() => UserEntity, (user) => user.info)
  user: UserEntity;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'bank' })
  bank: string;

  @Column({ name: 'short_bank', nullable: true })
  shortBank: string;

  @Column({ name: 'bank_account' })
  bankAccount: string;

  @Column({ name: 'bank_account_name' })
  bankAccountName: string;
}
