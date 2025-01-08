import { Module } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { PersonajeGateway } from './personaje.gateway';

@Module({
  providers: [PersonajeGateway, PersonajeService],
})
export class PersonajeModule {}
