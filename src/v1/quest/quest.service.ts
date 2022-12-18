import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quests } from 'src/entity/quest.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class QuestService {
  constructor(
    @InjectRepository(Quests) private questRepository: Repository<Quests>,
    private readonly userService: UserService,
  ) {}

  async fetch() {
    return await this.questRepository.find({
      relations: ['owner'],
    });
  }

  async create(data, ownerId) {
    const newQuest = {
      title: data.title,
      description: data.description,
      reward: data.reward,
      owner: ownerId,
    };

    return await this.questRepository.save(newQuest);
  }

  async update(id, data) {
    console.log(id);
    const target = await this.questRepository.findOne({
      where: { id },
    });

    if (!target) {
      throw new NotFoundException('quest could not found');
    }

    target.title = data.title ?? target.title;
    target.description = data.description ?? target.description;
    target.reward = data.reward ?? target.reward;
    target.example = data.example ?? target.example;

    return await this.questRepository.save(target);
  }
}
