import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemBase } from './models/item-base';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items$: Observable<ItemBase<any>[]>;

  constructor(private readonly _service: DataService) {
    this.items$ = this._service.getFormConstructorSetting();
  }
}
