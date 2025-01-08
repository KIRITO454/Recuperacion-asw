import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Injectable()
export class PersonajeService {
  create(createPersonajeDto: CreatePersonajeDto) {
    return 'This action adds a new personaje';
  }

  findAll() {
    return `This action returns all personaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaje`;
  }

  update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
    return `This action updates a #${id} personaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaje`;
  }
}
