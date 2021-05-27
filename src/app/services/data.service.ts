import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemBase } from '../models/item-base';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private readonly _http: HttpClient) {}

  getFormConstructorSetting() {
    return this._http.get<ItemBase<any>[]>('/assets/data/form.json').pipe(
      map((controls: ItemBase<any>[]) => {
        return controls.map((control: ItemBase<any>) => {
          return new ItemBase(control);
        });
      })
    );
  }
}
