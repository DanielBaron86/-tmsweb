import {inject, Injectable, signal} from '@angular/core';
import {GoodsTypesModel} from '../../models/goods-models';
import {HttpClient, httpResource} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AuthServices} from '../auth/auth.services';
import { throwError } from 'rxjs';
import {BaseItem} from '../../models/base-item';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {

  http = inject(HttpClient);
  AuthServices= inject(AuthServices);

  get goodstypes(){
    return this.#goodstypes.asReadonly()
  }

  get baseTypes(){
    return this.#baseTypes.asReadonly()
  }

  readonly #goodstypes = httpResource<GoodsTypesModel[]>(() => ({
    url: `https://tmsapi.danielsplaygrounds.com/api/v1/goods/goodtypes`,
    method: 'GET',
    defaultValue:  signal<BaseItem[]>([])
  }));

  readonly #baseTypes = httpResource<BaseItem[]>(() => ({
    url: `https://tmsapi.danielsplaygrounds.com/api/v1/goods/base_goods`,
    method: 'GET',
    defaultValue: signal<BaseItem[]>([])
  }));
  get goodstypesList(){
    return this.#goodstypes.asReadonly();
  }

  get baseTypesList(){
    return this.#baseTypes.asReadonly();
  }



}
