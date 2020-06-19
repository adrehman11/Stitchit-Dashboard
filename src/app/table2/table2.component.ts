import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements  OnInit ,OnDestroy  {

  constructor(private router: Router,public AppServices:Appservice) { }
  displayedColumns: string[] = ['ID', 'Name','Status'];
  dataSource ;
  private dashboradsub: Subscription;
  ngOnInit(): void {
    this.dashboradsub =this.AppServices.getproblems().subscribe((resdata)=>{
      this. dataSource= resdata.resdata;
    })
  }
  onRowClicked(row)
  {
    console.log(row.position);
  }
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }
}
