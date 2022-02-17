import { BadRequestException, Injectable } from '@nestjs/common';
import { Any, getMongoManager, getMongoRepository, Like } from 'typeorm';
import { StoreReqeust } from './dto/request/store.request';
import { Store } from './store/store.entity';
import { StoreRepository } from './store/store.repository';

export type StoreType = {
  id: string;
  title: string;
  category: string;
  address: string;
  x: string;
  y: string;
};

@Injectable()
export class AppService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async postStore(request: StoreReqeust) {
    await this.storeRepository
      .save(Store.create(request as StoreType))
      .catch((err) => {
        throw new BadRequestException('Already Registered Store.');
      });
  }

  async queryStore(lon: number, lat: number, distance: number, category: string) {
    const repostiory = getMongoRepository(Store);
    return await repostiory.find({
      where: {
        $and: [
          {
            location: {
              $geoWithin: {
                $centerSphere: [[Number(lon), Number(lat)], Number(distance) / 6378.1],
              },
            },
          },
          {
            category: new RegExp(`^${category}`)
          }
        ],
      },
    }).catch((err) => {
      throw new BadRequestException('Parameter Value Not Found')
    });
  }

  // where: {
  //   $and: [
  //     {
  //       locationIndex: {$geoWithin: {$centerSphere: [[126.9682994, 37.5572500], 3.3396 / 6378.1]}}
  //     }
  //   ]
  // }

  // location: {
  //   $geoWithin: {
  //     $centerSphere: [[lon, lat], 100 / 6378.1], //km 단위
  //   },
  // },
}
