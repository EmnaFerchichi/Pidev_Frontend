import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CreatecourseComponent } from './compenents/coursecomponents/createcourse/createcourse.component';
import { ReadcourseComponent } from './compenents/coursecomponents/readcourse/readcourse.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'create', component:CreateComponent},
  {path:'create/:id_qcm', component:CreateComponent},
  {path:'read', component:ReadComponent},
  {path:'createcourse', component:CreatecourseComponent},
  {path:'createcourse/:id', component:CreatecourseComponent},
  {path:'readcourse', component:ReadcourseComponent},  
  {path:'charts', component:ChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
