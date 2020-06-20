import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-problems',
  templateUrl: './view-problems.component.html',
  styleUrls: ['./view-problems.component.css']
})
export class ViewProblemsComponent implements OnInit,OnDestroy {
utype;
pid;
Image='data:image/png;base64,'
name;
ID;
usertype;
Discription;
msg;
  constructor(private router: Router,public AppServices:Appservice) { }
  private dashboradsub: Subscription;
  ngOnInit(): void {
    this.utype = this.AppServices.getputype()
    this.pid =this.AppServices.getproblemID()
    this.dashboradsub= this.AppServices.viewproblem(this.pid,this.utype).subscribe((resdata)=>{
      this.ID=resdata.ID;
      this.usertype=resdata.utype;
      this.Image= this.Image+resdata.Image;
      this.name=resdata.name;
      this.Discription=resdata.discription

     })

  }
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }
   onSendResponse(){
    this.dashboradsub=this.AppServices.sendresponseprob(this.msg,this.ID,this.usertype).subscribe((resdat)=>{
      if(resdat.message=="Done")
      {
        alert("Response Send")
        this.router.navigateByUrl("dashboard/(main:suggestionproblem)")
      }
      else{
        alert("Try Again")
      }
    })
 }

}
