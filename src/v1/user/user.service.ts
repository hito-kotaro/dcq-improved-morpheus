import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async register(id: string): Promise<Users> {
    Logger.log({ type: 'register', id });
    return await this.userRepository.save({
      id,
    });
  }

  async findOneById(id: string): Promise<Users> {
    return await this.userRepository.findOne({ where: { id } });
  }
}
