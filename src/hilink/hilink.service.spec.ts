import { Test, TestingModule } from '@nestjs/testing';
import { HilinkService } from './hilink.service';

describe('HilinkService', () => {
  let service: HilinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HilinkService],
    }).compile();

    service = module.get<HilinkService>(HilinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
