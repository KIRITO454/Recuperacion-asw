import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { PersonajeModule } from './personaje/personaje.module';
import { AsignacionModule } from './asignacion/asignacion.module';

@Module({
  imports: [

    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '',
      autoLoadEntities: true,
      synchronize: true,
    }),

    
    SerieModule,

    
    PersonajeModule,

    
    AsignacionModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
