import { Component, OnInit, OnDestroy } from '@angular/core';
import {Appservice} from '../app.service';
import { Router } from '@angular/router';
import{ Subscription }from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  Email="";
  Password="";
  message
  private loginsub: Subscription;
  constructor(public AppServices:Appservice,private _router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
   this.loginsub.unsubscribe();
  }
  onlogin(){
   this.loginsub =this.AppServices.login(this.Email,this.Password).subscribe((resdata)=>{
      this.message = resdata.message;
        if(this.message=="done")
        {
          this._router.navigateByUrl("dashboard/(main:statistics)")
        }
        else if(this.message=="nomatch")
        {
          alert("incorrect passowrd and email")
        }
  })
  }
}
