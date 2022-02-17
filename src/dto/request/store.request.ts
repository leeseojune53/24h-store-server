import { IsNotEmpty } from 'class-validator';

export class StoreReqeust {
  @IsNotEmpty()
  id: string;
  
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  x: string;

  @IsNotEmpty()
  y: string;
}
