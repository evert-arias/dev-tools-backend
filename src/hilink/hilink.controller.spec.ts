import { Test, TestingModule } from '@nestjs/testing';
import { HilinkController } from './hilink.controller';

describe('HilinkController', () => {
  let controller: HilinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HilinkController],
    }).compile();

    controller = module.get<HilinkController>(HilinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
