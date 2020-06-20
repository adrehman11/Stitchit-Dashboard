import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-suggestion',
  templateUrl: './view-suggestion.component.html',
  styleUrls: ['./view-suggestion.component.css']
})
export class ViewSuggestionComponent implements OnInit,OnDestroy {
  utype;
  sid;
Image='data:image/png;base64,'
name;
ID;
usertype;
Discription;
msg;
constructor(private router: Router,public AppServices:Appservice) { }
private dashboradsub: Subscription;
  ngOnInit(): void {
    this.utype = this.AppServices.getsutype()
    this.sid =this.AppServices.getsuggestinID()
    this.dashboradsub= this.AppServices.viewsuggestion(this.sid,this.utype).subscribe((resdata)=>{
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
      this.dashboradsub=this.AppServices.sendresponse(this.msg,this.ID,this.usertype).subscribe((resdat)=>{
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
