import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormDetailComponent } from './form-detail.component';


const routes: Routes = [
  {path: '', component: FormDetailComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormdetailRoutingModule { }
