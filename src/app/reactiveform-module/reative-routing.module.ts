import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformModuleComponent } from './reactiveform-module.component';


const routes: Routes = [
  {path: '', component: ReactiveformModuleComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReativeRoutingModule { }
