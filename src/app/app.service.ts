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
private suggestionid;
private sutype;
private putype;
private problemid;






    login(Email,Password){
      console.log(this.urli)
        return this.http.post<{message:String}>
        (this.urli+"/dashboard/adminlogin",{"Email":Email,"Password":Password})
        
    }
    viewsuggestion(ID,utype){
      return this.http.post<{Image:String,ID:String,utype:String,discription:String,name:String}>
      (this.urli+"/dashboard2/viewsuggestionproblem",{"id":ID,"utype":utype,"type":"Suggestion"})
  }
  viewproblem(ID,utype){
    return this.http.post<{Image:String,ID:String,utype:String,discription:String,name:String}>
    (this.urli+"/dashboard2/viewsuggestionproblem",{"id":ID,"utype":utype,"type":"Problem"})
}
sendresponse(msg,ID,usertype)
{
  return this.http.post<{message:String}>
  (this.urli+"/dashboard2/sendReponse",{"msg":msg,"id":ID,"utype":usertype,"type":"Suggestion"})
}
sendresponseprob(msg,ID,usertype)
{
  return this.http.post<{message:String}>
  (this.urli+"/dashboard2/sendReponse",{"msg":msg,"id":ID,"utype":usertype,"type":"Problem"})
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
      return this.http.post<{Name:String,Email:String,Contact:String,Gender:String,Image:String,Rating:String}>
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
    setsuggestinID(ID,usertype)
    {
      this.sutype=usertype;
      this.suggestionid=ID;

    }
    getsuggestinID(){
      return (this.suggestionid)
    }
    getsutype(){
      return (this.sutype)
    }
    setproblemID(ID,usertype)
    {
      this.putype=usertype;
      this.problemid=ID;

    }
    getproblemID(){
      console.log(this.problemid)
      return (this.problemid)
    }
    getputype(){
      return (this.putype)
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
