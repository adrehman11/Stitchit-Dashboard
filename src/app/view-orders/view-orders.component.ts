import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})

export class ViewOrdersComponent implements OnInit ,OnDestroy{
  CustomerName
  TailorName
  ShirtDetails
  TrouserDetails
  DressType
  StichType
  Lace
  Pipe
  Button
  OderType
  Image='data:image/png;base64,'
  OrderDate
  OderDeadline
  Coments
  OrderStatus
  OrderStartedDate
  DressPrice
  Rating
  RatingStatus

  orderid

private dashboradsub: Subscription;
  constructor(private router: Router,public AppServices:Appservice) { }

  ngOnInit(): void {
    this.orderid=this.AppServices.getorderID()
    this.dashboradsub = this.AppServices.getorderinformation(this.orderid).subscribe((resdata)=>{
        this.CustomerName=resdata.customername;
        this.TailorName=resdata.tailorname;
        this.ShirtDetails=resdata.ShirtDetails;
        this.TrouserDetails=resdata.TrouserDetails;
        this.DressType=resdata.DressType;
        this.StichType=resdata.StichType;
        this.Lace=resdata.Lace;
        this.Pipe=resdata.Pipe;
        this.Button=resdata.Button;
        this.OderType=resdata.OderType;
        this.Image=this.Image+resdata.Image;
        this.OrderDate=resdata.OrderDate;
        this. OderDeadline=resdata.OderDeadline
        this.Coments=resdata.coments
        this.OrderStatus=resdata.OrderStatus
        this.OrderStartedDate=resdata.OrderStartedDate
        this.DressPrice=resdata.DressPrice
        this.Rating=resdata.Rating
        this.RatingStatus=resdata.ratingStatus
    })

}
onDeleteOrder(){
  this.dashboradsub  = this.AppServices.orderDelete(this.orderid).subscribe((resdata)=>{
    if(resdata.message=="Order Deleted")
    {
      alert("Order Deleted")
      this.router.navigateByUrl("dashboard/(main:orderlist)")
    }
    else{
      alert("try Again")
    }
})
}
ngOnDestroy(): void {
  this.dashboradsub.unsubscribe();
 }
}
