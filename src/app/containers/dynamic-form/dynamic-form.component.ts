import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBase } from 'src/app/models/item-base';
import { ItemControlService } from 'src/app/services/item-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() items: ItemBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private readonly _service: ItemControlService) {}

  ngOnInit() {
    this.form = this._service.toFormGroup(this.items as ItemBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
