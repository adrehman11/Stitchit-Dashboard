import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Appservice} from '../app.service';
import{ Subscription }from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-userprofile',
  templateUrl: './view-userprofile.component.html',
  styleUrls: ['./view-userprofile.component.css']
})
export class ViewUserprofileComponent implements OnInit,OnDestroy {
  constructor(private router: Router,public AppServices:Appservice, private sanitizer: DomSanitizer) { }
  contact
  email
  gender
  name
  rating
  bol= false;
  userid
  utype
  khol=false;
 imageurl='data:image/png;base64,'
  private dashboradsub: Subscription;


  ngOnInit(): void {
    this.utype = this.AppServices.getutype()
    this.userid =this.AppServices.getuserID()
    this.dashboradsub= this.AppServices.getuserinformation(this.userid,this.utype)
    .subscribe((res)=>{
      console.log(res)
      this.email= res.Email;
      this.name = res.Name
      this.gender = res.Gender
      this.contact=res.Contact
      this.imageurl=this.imageurl+res.Image
      this.khol=true;
      if(this.utype=="Tailor"){
        this.bol=true
        this.rating=res.Rating
      }
    })
  }

  onDelete(){
    this.dashboradsub  = this.AppServices.deleteuser(this.userid,this.utype).subscribe((resdata)=>{
        if(resdata.message=="User Deleted")
        {
          alert("User Deleted")
          this.router.navigateByUrl("dashboard/(main:userlist)")
        }
        else{
          alert("try Again")
        }
    })
  }
  onsendwarning(){

    this.dashboradsub  = this.AppServices.sendwarning(this.userid,this.utype).subscribe((resdata)=>{
      if(resdata.message=="Warning send")
      {
        alert('Warning send')
      }
      else
      {
        alert("try Again")
      }
    })

  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  ngOnDestroy(): void {
    this.dashboradsub.unsubscribe();
   }

}
