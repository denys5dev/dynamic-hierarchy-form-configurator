import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemBase } from '../models/item-base';

@Injectable({
  providedIn: 'root',
})
export class ItemControlService {
  group: any = {};
  constructor() {}

  toFormGroup(items: ItemBase<string>[]) {
    items.forEach((item) => {
      if (item.type !== 'value') {
        this.group[item.key] = item.required
          ? new FormControl(item.value || '', Validators.required)
          : new FormControl(item.value || '');
        if (item.children) {
          if (item.children.length > 0) {
            this.toFormGroup(item.children);
          }
        }
      }
    });

    return new FormGroup(this.group);
  }
}
