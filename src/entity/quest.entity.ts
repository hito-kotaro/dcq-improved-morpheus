import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from './user.entity';

@Entity()
export class Quests {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  example: string;

  @ApiProperty()
  @Column({ default: 0 })
  reward: number;

  @ApiProperty()
  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'owner_id' })
  owner: Users;
  // auth0|639c4619aa12294d12d76049
  @ApiProperty()
  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: 'timestamp',
    precision: 0,
  })
  updated_at: Date;
}
