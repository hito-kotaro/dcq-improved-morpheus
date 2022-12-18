import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from 'src/permissions/permissions.decorator';
import { PermissionsGuard } from 'src/permissions/permissions.guard';
import { QuestService } from './quest.service';

@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get()
  @Permissions('read:quest')
  async signUp(@Request() req: any) {
    console.log(req.user);
    return 200;
  }
}
