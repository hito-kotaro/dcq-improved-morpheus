import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from 'src/permissions/permissions.decorator';
import { PermissionsGuard } from 'src/permissions/permissions.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/signUp')
  signUp(@Body() req: any): string {
    return this.appService.signUp(req);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('/protect')
  @Permissions('read:protect')
  getSecret(@Req() req): string {
    console.log(req.user.sub);
    return 'protected!';
  }
}
