import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemBase } from '../models/item-base';

@Injectable({
  providedIn: 'root',
})
export class ItemControlService {
  constructor() {}

  toFormGroup(items: ItemBase<string>[]) {
    const group: any = {};

    items.forEach((item) => {
      group[item.key] = item.required
        ? new FormControl(item.value || '', Validators.required)
        : new FormControl(item.value || '');
    });

    return new FormGroup(group);
  }
}
