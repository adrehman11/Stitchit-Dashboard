import { Component, OnInit, OnDestroy } from '@angular/core';

import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit ,OnDestroy {
  customers;
  tailors;
  orders;

  private dashboard: Subscription;
  ngOnDestroy(): void {
    this.dashboard.unsubscribe();
   }
  constructor(public AppServices:Appservice) { }

  ngOnInit() {
    this.AppServices.getdashboardData();
    this.dashboard= this.AppServices.getcustomerdata().
    subscribe((customers)=>{
       this.customers=customers
    })
    this.dashboard= this.AppServices.gettailordata().
    subscribe((tailors)=>{
       this.tailors=tailors
    })
    this.dashboard= this.AppServices.getorderdata().
    subscribe((orders)=>{
       this.orders=orders
    })

}
}
