import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionGateway } from './asignacion.gateway';

@Module({
  providers: [AsignacionGateway, AsignacionService],
})
export class AsignacionModule {}
