import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  signUp(req: any): string {
    Logger.log(req);
    Logger.log('access from auth0');
    return 'sign up';
  }
}
