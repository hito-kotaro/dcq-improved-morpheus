import { Body, Controller, Logger, Post } from '@nestjs/common';
import { Users } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/test/register')
  async testSignUp(@Body() event: any) {
    Logger.log(event);
    return event;
  }

  @Post('/register')
  async signUp(@Body() user: { id: string }): Promise<Users> {
    return await this.userService.register(user.id);
  }
}
