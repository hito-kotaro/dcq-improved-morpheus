import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from 'src/entity/user.entity';
import { Permissions } from 'src/permissions/permissions.decorator';
import { PermissionsGuard } from 'src/permissions/permissions.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post('/register')
  @Permissions('post:new_user')
  async signUp(@Body() user: { id: string }): Promise<Users> {
    return await this.userService.register(user.id);
  }
}
