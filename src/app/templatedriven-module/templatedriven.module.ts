import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedrivenModuleComponent } from './templatedriven-module.component';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TemplatedrivenModuleComponent],
  imports: [
    CommonModule, TemplateRoutingModule, FormsModule
  ]
})
export class TemplatedrivenModule { }
