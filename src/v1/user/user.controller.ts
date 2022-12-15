import { Body, Controller, Post } from '@nestjs/common';
import { Users } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async signUp(@Body() user: { id: string }): Promise<Users> {
    return await this.userService.register(user.id);
  }
}
