import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { Quests } from 'src/entity/quest.entity';

dotenv.config();

@Injectable()
export class NoticeService {
  async notice(quest: Quests) {
    const msg = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '新しいクエストが追加されました',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*タイトル:*\n${quest.title}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*内容:*\n${quest.description}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*登録日:*\n${quest.created_at}`,
            },
            {
              type: 'mrkdwn',
              text: '*期限:*\n指定なし',
            },
          ],
        },
      ],
    };
    try {
      await axios.post(process.env.SLACK_WEB_HOOK_URL, msg);
    } catch (e: any) {
      Logger.error(e);
    }
  }
}
