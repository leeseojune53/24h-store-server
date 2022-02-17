import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreRepository } from './store/store.repository';
import { TypeOrmConfigModule } from './typeorm/typeorm-config.module';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([StoreRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
