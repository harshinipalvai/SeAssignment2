import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestsearchComponent } from './restsearch/restsearch.component';
import { RestprofinfoComponent } from './restprofinfo/restprofinfo.component';


const routes: Routes = [
  {path:'',component:RestsearchComponent},
  {path:'restaurantprofile',component:RestprofinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
