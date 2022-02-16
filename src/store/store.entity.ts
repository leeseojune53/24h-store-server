import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_store' })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  storeName: string;

  @Column()
  category: string;

  @Column({ length: 512 })
  description: string;

  @Column()
  telephone: string;

  @Column({ length: 512 })
  address: string;

  @Column()
  mapx: number;

  @Column()
  mapy: number;
}
