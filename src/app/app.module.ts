import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { DynamicFormItemComponent } from './components/dynamic-form-item/dynamic-form-item.component';
import { ItemHierarchyComponent } from './components/item-hierarchy/item-hierarchy.component';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormItemComponent,
    DynamicFormComponent,
    ItemHierarchyComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DevExtremeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
