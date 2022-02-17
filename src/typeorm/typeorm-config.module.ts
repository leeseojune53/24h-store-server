import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from './orm-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() => connectionOptions],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('production'),
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmConfigModule {}
