import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { Quests } from 'src/entity/quest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { NoticeModule } from '../notice/notice.module';

@Module({
  imports: [NoticeModule, UserModule, TypeOrmModule.forFeature([Quests])],
  providers: [QuestService],
  controllers: [QuestController],
})
export class QuestModule {}
