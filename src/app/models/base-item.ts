import {BaseModel} from './base-model';

export  interface BaseItem extends BaseModel{
  id:number
  goodModelBaseTypeId: string;
  description: string;
  manufacturer: string
}
