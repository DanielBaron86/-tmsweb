import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ButtonComponent} from '../../../components/ui/button-component/button-component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-good-types',
  imports: [
    ButtonComponent
  ],
  templateUrl: './add-good-types.html',
  styleUrl: './add-good-types.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddGoodTypes {
router = inject(Router)
  protected CancelNav() {
    this.router.navigate(['goods/good_types'])
  }
}
