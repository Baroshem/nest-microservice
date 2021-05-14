import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'item',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([ItemRepository, ItemEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
