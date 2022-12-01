import { Test, TestingModule } from '@nestjs/testing';
import { CinemaShowService } from './cinema.show.service';

describe('CinemaShowService', () => {
  let service: CinemaShowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CinemaShowService],
    }).compile();

    service = module.get<CinemaShowService>(CinemaShowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
