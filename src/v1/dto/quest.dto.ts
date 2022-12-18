import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';
import { Users } from 'src/entity/user.entity';

export class Quest {
  @ApiProperty({ type: Number })
  readonly id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  @IsOptional()
  description?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  example?: string;

  @ApiProperty({ type: Number })
  @IsPositive()
  reward: number;

  @ApiProperty({ type: Users })
  owner: Users;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: Date })
  updated_at: Date;
}

export class Quests {
  @ApiProperty({ type: Quest })
  quests: Quest[];

  @ApiProperty({ type: Number })
  total: number;
}

export class CreateQuest {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  @IsOptional()
  description?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  example?: string;

  @ApiProperty({ type: Number })
  @IsPositive()
  reward: number;

  @ApiProperty({ type: Users })
  owner: Users;
}

export class UpdateQuest {
  @ApiProperty({ type: String })
  @IsOptional()
  title?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  description?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  example?: string;

  @ApiProperty({ type: Number })
  @IsPositive()
  @IsOptional()
  reward?: number;

  @ApiProperty({ type: Users })
  @IsOptional()
  owner: Users;
}
