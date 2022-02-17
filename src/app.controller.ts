import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { StoreReqeust } from './dto/request/store.request';

@Controller('store')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postStore(@Body() request: StoreReqeust) {
    await this.appService.postStore(request);
  }

  @Get()
  async queryStore(
    @Query('lon') lon: number,
    @Query('lat') lat: number,
    @Query('distance') distance: number = 1,
    @Query('category') category: string = '',
  ) {
    return this.appService.queryStore(lon, lat, distance, category);
  }
}
