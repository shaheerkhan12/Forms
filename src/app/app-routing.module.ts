import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [

{path: 'forms', loadChildren: './forms/form.module#FormModule', },
{path: 'templatedriven', loadChildren: './templatedriven-module/templatedriven.module#TemplatedrivenModule', canActivate:
[AuthGuard]},
{path: 'reactiveform', loadChildren: './reactiveform-module/reactiveform.module#ReactiveformModule', canActivate:
[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
