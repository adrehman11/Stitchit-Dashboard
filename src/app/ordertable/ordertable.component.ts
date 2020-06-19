import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css']
})
export class OrdertableComponent implements OnInit ,OnDestroy{

  constructor(private router: Router,public AppServices:Appservice) { }

  displayedColumns: string[] = ['OrderID', 'Dresstype', 'TailorName','CustomerName'];
  dataSource ;
  private dashboradsub: Subscription;
  ngOnInit(): void {
    this.dashboradsub =this.AppServices.getorderlist().subscribe((resdata)=>{
      this. dataSource= resdata.resdata;

  })
}
  onRowClicked(row)
  {
    this.AppServices.setorderID(row.OrderID);
    this.router.navigateByUrl("dashboard/(main:vieworderdetails)")
  }


ngOnDestroy(): void {
  this.dashboradsub.unsubscribe();
 }
}
