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
  displayedColumns: string[] = ['ID', 'Utype','Status'];
  dataSource ;
  private dashboradsub: Subscription;
  ngOnInit(): void {
    this.dashboradsub =this.AppServices.getproblems().subscribe((resdata)=>{
      this. dataSource= resdata.resdata;
    })
  }
  onRowClicked(row)
  {
    this.AppServices.setproblemID(row.ID,row.Utype)
    console.log(row.ID,row.Utype)
    this.router.navigateByUrl("dashboard/(main:viewproblems)")
  }
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }
}
