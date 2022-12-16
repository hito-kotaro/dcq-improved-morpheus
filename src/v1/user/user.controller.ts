import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from 'src/entity/user.entity';
import { Permissions } from 'src/permissions/permissions.decorator';
import { PermissionsGuard } from 'src/permissions/permissions.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/test/register')
  async testSignUp(@Body() event: any) {
    Logger.log(event);
    return event;
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post('/register')
  @Permissions('post:new_user')
  async signUp(@Body() user: { id: string }): Promise<Users> {
    return await this.userService.register(user.id);
  }
}
