import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewSuggestionComponent } from './view-suggestion/view-suggestion.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { ListusersComponent } from './listusers/listusers.component';
import { SuggestionproblemsComponent } from './suggestionproblems/suggestionproblems.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserprofileComponent } from './view-userprofile/view-userprofile.component';
import { ViewProblemsComponent } from './view-problems/view-problems.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: MainpageComponent,
  children:
  [
    { path: 'statistics'                   , component: StatisticsComponent     , outlet:'main'      },
    { path: 'suggestionproblem'                   , component: SuggestionproblemsComponent     , outlet:'main'      },
    { path: 'userlist'                   , component: ListusersComponent     , outlet:'main'      },
    { path: 'orderlist'                   , component: OrderslistComponent     , outlet:'main'      },
    {path: 'user-profle', component: ViewUserprofileComponent, outlet:'main'    },
    {path: 'viewproblems', component: ViewProblemsComponent ,outlet:'main' },
    {path: 'viewsuggestion', component: ViewSuggestionComponent ,outlet:'main' },
    {path: 'viewuserprofile', component: ViewUserprofileComponent ,outlet:'main' },
    {path: 'vieworderdetails', component: ViewOrdersComponent ,outlet:'main' },


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
