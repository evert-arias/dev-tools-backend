import { Injectable } from '@nestjs/common';
import { Base64 } from 'js-base64';
import { sha256 } from 'js-sha256';
import { GeneratePasswordDto } from './dto/generate-password.dto';

@Injectable()
export class HilinkService {
  // Perform sha256 and base64 encode
  private b64_sha256(data: string): string {
    const sha256sig = sha256(data);
    return Base64.encode(sha256sig);
  }

  // Make hashed password
  makePassword(generatePasswordDto: GeneratePasswordDto): string {
    return this.b64_sha256(
      generatePasswordDto.username +
        this.b64_sha256(generatePasswordDto.password) +
        generatePasswordDto.token,
    );
  }
}
