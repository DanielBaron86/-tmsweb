import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {GoodsService} from '../../../services/goods/goods-service';
import {AuthServices} from '../../../services/auth/auth.services';

@Component({
  selector: 'app-good-types',
  imports: [],
  templateUrl: './good-types.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodTypes  implements OnInit{
  readonly  goodService = inject(GoodsService);
  readonly AuthServices = inject(AuthServices);
  ngOnInit() {
    if (this.goodService.goodstypes.hasValue()){
      console.log('GoodTypes',this.goodService.goodstypes.value());
    }
  }

}
