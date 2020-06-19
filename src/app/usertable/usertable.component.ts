import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit,OnDestroy {
  constructor(private router: Router,public AppServices:Appservice) { }
  private dashboradsub: Subscription;
  displayedColumns: string[] = ['position', 'name', 'profile'];
  dataSource ;
  ngOnInit(): void {
    this.dashboradsub =this.AppServices.getuserlist().subscribe((resdata)=>{
this. dataSource= resdata.resdata;
    })


  }
  onRowClicked= function (row) {

    this.AppServices.setuserID(row.position,row.profile)
    this.router.navigateByUrl("dashboard/(main:viewuserprofile)")


};
ngOnDestroy(): void {
  this.dashboradsub.unsubscribe();
 }

}
