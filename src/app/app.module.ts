import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ListusersComponent } from './listusers/listusers.component';
import { SuggestionproblemsComponent } from './suggestionproblems/suggestionproblems.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { ChartsModule } from 'ng2-charts';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';

import { UsertableComponent } from './usertable/usertable.component';
import { OrdertableComponent } from './ordertable/ordertable.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewUserprofileComponent } from './view-userprofile/view-userprofile.component';
import { ViewProblemsComponent } from './view-problems/view-problems.component';
import { ViewSuggestionComponent } from './view-suggestion/view-suggestion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    MainpageComponent,
    StatisticsComponent,
    ListusersComponent,
    SuggestionproblemsComponent,
    OrderslistComponent,
    Chart1Component,
    Chart2Component,
    Table1Component,
    Table2Component,

    UsertableComponent,
    OrdertableComponent,
    ViewOrdersComponent,
    ViewUserprofileComponent,
    ViewProblemsComponent,
    ViewSuggestionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    ChartsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
