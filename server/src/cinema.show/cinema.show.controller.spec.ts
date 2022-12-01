import { Test, TestingModule } from '@nestjs/testing';
import { CinemaShowController } from './cinema.show.controller';

describe('CinemaShowController', () => {
  let controller: CinemaShowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CinemaShowController],
    }).compile();

    controller = module.get<CinemaShowController>(CinemaShowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
