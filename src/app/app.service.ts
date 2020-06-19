import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Subject}from "rxjs";


@Injectable({providedIn:'root'})

export class Appservice{
    constructor(private  http:HttpClient){}
 private urli ="http://localhost:3000";
 private customers;
 private userID;
 private orderID;
private tailors;
private orders;
private utype;
private updatec = new Subject<String>();
private updatet = new Subject<String>();
private updateo = new Subject<String>();

    login(Email,Password){
        return this.http.post<{message:String}>
        (this.urli+"/dashboard/adminlogin",{"Email":Email,"Password":Password})
    }

    getuserlist(){
      return this.http.get<{resdata:[]}>(this.urli+"/dashboard/getusers")
    }
    getorderlist(){
      return this.http.get<{resdata:[]}>(this.urli+"/dashboard/getorders")
    }
    getsuggestion(){
      return this.http.get<{resdata:[]}>(this.urli+"/dashboard/getsuggestion")
    }
    getproblems(){
      return this.http.get<{resdata:[]}>(this.urli+"/dashboard/getproblems")
    }
    getuserinformation(id,utype){
      return this.http.post<{Name:String,Email:String,Contact:String,Gender:String,Image:String}>
      (this.urli+"/dashboard2/getuserinformation",{"id":id ,"utype":utype})
    }
    getorderinformation(id){
      return this.http.post<{customername:String,tailorname:String,ShirtDetails:String
      ,TrouserDetails:String,DressType:String,StichType:String,Lace:String
  ,Pipe:String,Button:String,OderType:String ,OrderDate:String ,OderDeadline:String,
  coments:String, OrderStatus:String,OrderStartedDate:String,
  DressPrice:String,Rating:String,ratingStatus:String,Image:String}>
      (this.urli+"/dashboard2/orderDetails",{"id":id})
    }
    deleteuser(id,utype){
      return this.http.post<{message:String}>
      (this.urli+"/dashboard2/deleteuser",{"id":id ,type:"user","utype":utype})
    }
    orderDelete(id){
      return this.http.post<{message:String}>
      (this.urli+"/dashboard2/deleteuser",{"id":id ,type:"order"})
    }
    sendwarning(id,utype){
      return this.http.post<{message:String}>
      (this.urli+"/dashboard2/sendwarning",{"id":id ,"utype":utype})
    }


    getchart1Data(){
      return this.http.get<{resdata1:[],resdata2:[]}>
      (this.urli+"/dashboard/adminchart1")
    }
    getdashboardData(){
       this.http.get<{customer:String,tailor:String,orders:String}>
      (this.urli+"/dashboard/getdatadashboard").subscribe((resdata)=>{
        this.customers = resdata.customer;
        this.tailors = resdata.tailor;
        this.orders = resdata.orders;
        this.updatec.next(this.customers)
        this.updatet.next(this.tailors)
        this.updateo.next(this.orders)

    })
    }
    setuserID(ID,profile){
      this.userID=ID
      this.utype=profile
    }
    setorderID(ID)
    {
      this.orderID=ID;

    }
    getorderID(){
      return (this.orderID)
    }
    getuserID(){
      return (this.userID)
    }
    getutype(){

      return (this.utype)

    }
    getcustomerdata(){
      return (this.updatec.asObservable())

    }
    gettailordata(){
      return (this.updatet.asObservable())

    }
    getorderdata(){

      return (this.updateo.asObservable())

    }
}
