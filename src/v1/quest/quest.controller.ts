import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from 'src/permissions/permissions.decorator';
import { PermissionsGuard } from 'src/permissions/permissions.guard';
import { CreateQuest, Quest, Quests } from '../dto/quest.dto';
import { QuestService } from './quest.service';

@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @Get('/test')
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:quest')
  async signUp(@Request() req: any) {
    console.log(req.user);
    return 200;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:quest')
  async fetch(): Promise<Quests> {
    const quests = await this.questService.fetch();
    return { quests, total: quests.length };
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:quest')
  async fetchById(@Param('id') id: number): Promise<Quest> {
    console.log(id);
    return await this.questService.fetchById(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:quest')
  async create(
    @Body(ValidationPipe) quest: CreateQuest,
    @Request() req: any,
  ): Promise<Quest> {
    return await this.questService.create(quest, req.user.sub);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:quest')
  async update(@Body() quest, @Param('id') id: number): Promise<Quest> {
    return await this.questService.update(id, quest);
  }
}
