import { Component, OnInit,OnDestroy } from '@angular/core';

import { Color } from 'ng2-charts';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit,OnDestroy {
  private dashboradsub: Subscription;
  lineChartData;
  lineChartLabels;
  chartready=false;
  constructor(public AppServices:Appservice) { }

  ngOnInit(){
    this.dashboradsub =this.AppServices.getchart1Data().subscribe((resdata)=>{
     this. lineChartData = [
        { data:resdata.resdata2, label: 'No of user register' },
      ];
     this.lineChartLabels = resdata.resdata1;
     this.chartready=true;
   })
   }
  //line chart

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }
}
