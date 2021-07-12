import { Injectable } from '@nestjs/common';
import { Message } from '@example-filetraffic/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
