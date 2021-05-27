import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBase } from 'src/app/models/item-base';

@Component({
  selector: 'app-dynamic-form-item',
  templateUrl: './dynamic-form-item.component.html',
  styleUrls: ['./dynamic-form-item.component.scss'],
})
export class DynamicFormItemComponent {
  @Input() item: ItemBase<string>;
  @Input() form: FormGroup;

  isValidCallback = () => {
    return this.form.controls[this.item.key].valid;
  };
}
