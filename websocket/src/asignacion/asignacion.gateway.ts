import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';

@WebSocketGateway()
export class AsignacionGateway {
  constructor(private readonly asignacionService: AsignacionService) {}

  @SubscribeMessage('createAsignacion')
  create(@MessageBody() createAsignacionDto: CreateAsignacionDto) {
    return this.asignacionService.create(createAsignacionDto);
  }

  @SubscribeMessage('findAllAsignacion')
  findAll() {
    return this.asignacionService.findAll();
  }

  @SubscribeMessage('findOneAsignacion')
  findOne(@MessageBody() id: number) {
    return this.asignacionService.findOne(id);
  }

  @SubscribeMessage('updateAsignacion')
  update(@MessageBody() updateAsignacionDto: UpdateAsignacionDto) {
    return this.asignacionService.update(updateAsignacionDto.id, updateAsignacionDto);
  }

  @SubscribeMessage('removeAsignacion')
  remove(@MessageBody() id: number) {
    return this.asignacionService.remove(id);
  }
}
