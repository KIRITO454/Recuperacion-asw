import { Test, TestingModule } from '@nestjs/testing';
import { SerieGateway } from './serie.gateway';
import { SerieService } from './serie.service';

describe('SerieGateway', () => {
  let gateway: SerieGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerieGateway, SerieService],
    }).compile();

    gateway = module.get<SerieGateway>(SerieGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
