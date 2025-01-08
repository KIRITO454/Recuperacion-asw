import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@WebSocketGateway()
export class PersonajeGateway {
  constructor(private readonly personajeService: PersonajeService) {}

  @SubscribeMessage('createPersonaje')
  create(@MessageBody() createPersonajeDto: CreatePersonajeDto) {
    return this.personajeService.create(createPersonajeDto);
  }

  @SubscribeMessage('findAllPersonaje')
  findAll() {
    return this.personajeService.findAll();
  }

  @SubscribeMessage('findOnePersonaje')
  findOne(@MessageBody() id: number) {
    return this.personajeService.findOne(id);
  }

  @SubscribeMessage('updatePersonaje')
  update(@MessageBody() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajeService.update(updatePersonajeDto.id, updatePersonajeDto);
  }

  @SubscribeMessage('removePersonaje')
  remove(@MessageBody() id: number) {
    return this.personajeService.remove(id);
  }
}
