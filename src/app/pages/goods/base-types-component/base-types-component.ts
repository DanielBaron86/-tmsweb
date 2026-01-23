import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BaseComponent} from '../../../components/goods/base/base-component/base-component';
import {GoodsService} from '../../../services/goods/goods-service';

@Component({
  selector: 'app-base-types-component',
  imports: [BaseComponent],
  templateUrl: './base-types-component.html',
  styleUrl: './base-types-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTypesComponent {
  goodService = inject(GoodsService);
}
