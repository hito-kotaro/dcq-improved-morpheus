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
  @Column({ nullable: true })
  first_name: string;

  @ApiProperty()
  @Column({ nullable: true })
  last_name: string;

  @ApiProperty()
  @Column({ default: 0 })
  point: number;

  @ApiProperty()
  @Column({ nullable: true })
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
