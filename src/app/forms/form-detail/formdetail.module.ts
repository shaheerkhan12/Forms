import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdetailRoutingModule } from './formdetail-routing.module';
import { FormDetailComponent } from './form-detail.component';



@NgModule({
  declarations: [FormDetailComponent],
  imports: [
    CommonModule, FormdetailRoutingModule
  ]
})
export class FormdetailModule { }
