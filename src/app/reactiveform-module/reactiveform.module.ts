import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformModuleComponent } from './reactiveform-module.component';
import { ReativeRoutingModule } from './reative-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReactiveformModuleComponent],
  imports: [
    CommonModule, ReativeRoutingModule, ReactiveFormsModule
  ]
})
export class ReactiveformModule { }
