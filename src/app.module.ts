import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HilinkController } from './hilink/hilink.controller';
import { HilinkService } from './hilink/hilink.service';

@Module({
  imports: [],
  controllers: [AppController, HilinkController],
  providers: [AppService, HilinkService],
})
export class AppModule {}
