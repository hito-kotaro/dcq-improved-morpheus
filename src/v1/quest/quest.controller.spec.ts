import { Test, TestingModule } from '@nestjs/testing';
import { Users } from 'src/entity/user.entity';
import { Any } from 'typeorm';
import { CreateQuest, Quest } from '../dto/quest.dto';
import { QuestController } from './quest.controller';
import { QuestService } from './quest.service';

describe('QuestController', () => {
  let controller: QuestController;

  const mockQuestService = {
    create: jest.fn((quest: CreateQuest, ownerId) => {
      const date = new Date();
      const owner: Users = {
        id: ownerId,
        first_name: '',
        last_name: '',
        point: 0,
        image: '',
        visit: false,
        created_at: date,
        updated_at: date,
      };
      return {
        id: 1,
        title: quest.title,
        description: quest.description,
        example: quest.example,
        reward: quest.reward,
        owner: owner,
        created_at: date,
        updated_at: date,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestController],
      providers: [QuestService],
    })
      .overrideProvider(QuestService)
      .useValue(mockQuestService)
      .compile();

    controller = module.get<QuestController>(QuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a quest', async () => {
    const req = { user: { sub: 'auth0|auth0noIDdesu' } };
    const quest: CreateQuest = {
      title: 'quest',
      description: 'descirption',
      example: 'example',
      reward: 1,
    };

    const createdQuest: Quest = {
      title: quest.title,
      description: quest.description,
      example: quest.example,
      reward: quest.reward,
      id: expect.any(Number),
      owner: expect.any(Any),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    };
    const result = await controller.create(quest, req);
    expect(result).toEqual(createdQuest);
    expect(result.owner.id).toEqual(req.user.sub);
  });
});
