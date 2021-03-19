import { Body, Controller, Post } from '@nestjs/common';
import { GeneratePasswordDto } from './dto/generate-password.dto';
import { HilinkService } from './hilink.service';

@Controller('hilink')
export class HilinkController {
  constructor(private hilinkService: HilinkService) {}

  @Post('/generate-password')
  makePassword(@Body() generatePasswordDto: GeneratePasswordDto): any {
    return {
      'hashed-password': this.hilinkService.makePassword(generatePasswordDto),
    };
  }
}
