import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ItemBase } from 'src/app/models/item-base';

@Component({
  selector: 'app-item-hierarchy',
  templateUrl: './item-hierarchy.component.html',
  styleUrls: ['./item-hierarchy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemHierarchyComponent implements OnChanges {
  @Input() items: ItemBase<any>[] | null = [];
  constructor() {}

  ngOnChanges() {
    console.log(this.items);
  }

  config(item: any) {
    console.log(item);
  }

  add(item: any) {
    console.log(item);
  }
}
