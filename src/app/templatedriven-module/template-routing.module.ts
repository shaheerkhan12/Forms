import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedrivenModuleComponent } from './templatedriven-module.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: TemplatedrivenModuleComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
