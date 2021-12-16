import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { RegionComponent } from './region/region.component';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  { path: 'world', component: TotalComponent },
  { path: 'region', component: RegionComponent, children:[
    {path:':country', component:AComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
