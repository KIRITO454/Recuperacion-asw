import { Test, TestingModule } from '@nestjs/testing';
import { PersonajeGateway } from './personaje.gateway';
import { PersonajeService } from './personaje.service';

describe('PersonajeGateway', () => {
  let gateway: PersonajeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonajeGateway, PersonajeService],
    }).compile();

    gateway = module.get<PersonajeGateway>(PersonajeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
