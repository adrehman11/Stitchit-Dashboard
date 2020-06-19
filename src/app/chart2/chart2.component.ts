import { Component, OnInit, OnDestroy } from '@angular/core';

import {Chart} from 'chart.js'
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit, OnDestroy {

  constructor(public AppServices:Appservice) { }
  chartready=false;
  customers;
  tailors;
  orders;
  doughnutChartLabels
  doughnutChartData
  doughnutChartColor
  doughnutChartType
  private dashboard: Subscription;


  ngOnInit(): void {
    this.dashboard= this.AppServices.getcustomerdata().
    subscribe((customers)=>{
       this.customers=customers
    })
    this.dashboard= this.AppServices.gettailordata().
    subscribe((tailors)=>{
       this.tailors=tailors
       console.log(this.chartready)
    })
    this.dashboard= this.AppServices.getorderdata().
    subscribe((orders)=>{
       this.orders=orders
       this.chartready=true
       this.doughnutChartData = [
        [this.customers,this.tailors,this.orders]
      ];

    })

  this.doughnutChartLabels = ['Customer', 'Tailor', 'Orders'];

  this.doughnutChartColor = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  this.doughnutChartType = 'doughnut';
  }
  ngOnDestroy(): void {
    this.dashboard.unsubscribe();
   }

}
