import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionGateway } from './asignacion.gateway';
import { AsignacionService } from './asignacion.service';

describe('AsignacionGateway', () => {
  let gateway: AsignacionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionGateway, AsignacionService],
    }).compile();

    gateway = module.get<AsignacionGateway>(AsignacionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
