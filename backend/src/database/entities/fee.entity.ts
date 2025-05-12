import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { HomeEntity } from '@database/entities/home.entity';

@Entity({ name: 'fees' })
export class FeeEntity extends BaseEntity {
  @ManyToMany(() => HomeEntity, (home) => home.fees)
  homes: HomeEntity[];

  @Column()
  name: string;
}
