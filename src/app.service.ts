import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(myVar: string | undefined): string {
    return myVar ?? 'unknown';
  }
}
