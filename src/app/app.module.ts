import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import{Ng2OrderModule} from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';
import { CreatecourseComponent } from './compenents/coursecomponents/createcourse/createcourse.component';
import { ReadcourseComponent } from './compenents/coursecomponents/readcourse/readcourse.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { FusionChartsModule } from "angular-fusioncharts";


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    DetailComponent,
    CreatecourseComponent,
    ReadcourseComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgChartsModule,
 


  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
