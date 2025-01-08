import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieGateway } from './serie.gateway';

@Module({
  providers: [SerieGateway, SerieService],
})
export class SerieModule {}
