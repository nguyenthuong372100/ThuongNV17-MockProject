import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  {path:'world',component:TotalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
