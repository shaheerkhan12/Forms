import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [

];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule, NgbModule
  ]
})
export class FormModule { }
