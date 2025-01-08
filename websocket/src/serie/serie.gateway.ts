import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@WebSocketGateway()
export class SerieGateway {
  constructor(private readonly serieService: SerieService) {}

  @SubscribeMessage('createSerie')
  create(@MessageBody() createSerieDto: CreateSerieDto) {
    return this.serieService.create(createSerieDto);
  }

  @SubscribeMessage('findAllSerie')
  findAll() {
    return this.serieService.findAll();
  }

  @SubscribeMessage('findOneSerie')
  findOne(@MessageBody() id: number) {
    return this.serieService.findOne(id);
  }

  @SubscribeMessage('updateSerie')
  update(@MessageBody() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(updateSerieDto.id, updateSerieDto);
  }

  @SubscribeMessage('removeSerie')
  remove(@MessageBody() id: number) {
    return this.serieService.remove(id);
  }
}
