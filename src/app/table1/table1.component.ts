import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements  OnInit ,OnDestroy {

  constructor(private router: Router,public AppServices:Appservice) { }
  displayedColumns: string[] = ['ID', 'Utype','Status'];
  dataSource ;
  private dashboradsub: Subscription;
  ngOnInit(): void {
    this.dashboradsub =this.AppServices.getsuggestion().subscribe((resdata)=>{
      this. dataSource= resdata.resdata;
    })
  }
  onRowClicked(row)
  {

    this.AppServices.setsuggestinID(row.ID,row.Utype)
    this.router.navigateByUrl("dashboard/(main:viewsuggestion)")

  }
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }
}
