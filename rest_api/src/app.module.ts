import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '',
      database: 'recuperacion',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
