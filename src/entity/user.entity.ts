import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Users {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column()
  point: number;

  @ApiProperty()
  @Column()
  image: string;

  @ApiProperty()
  @Column({ default: false })
  visit: boolean;

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
