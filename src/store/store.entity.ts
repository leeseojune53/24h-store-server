import { StoreType } from 'src/app.service';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Location } from './location';

@Entity()
export class Store {
  @ObjectIdColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column({ length: 512, unique: true })
  address: string;

  @Column({ type: 'point' })
  location: Location; 

  @Column()
  x: number;

  @Column()
  y: number;

  static create(store: StoreType) {
    const storeEntity = new Store();
    storeEntity.id = Number(store.id);
    storeEntity.title = store.title;
    storeEntity.category = store.category;
    storeEntity.address = store.address;
    storeEntity.x = Number(store.x);
    storeEntity.y = Number(store.y);
    storeEntity.location = new Location("Point", [Number(store.x), Number(store.y)])
    return storeEntity;
  }
}
