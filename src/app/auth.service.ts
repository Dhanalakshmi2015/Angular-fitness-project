import { User } from './user.model';
import {Subject} from 'rxjs/Subject';
import {AuthData} from './auth-data-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService{
  authChange = new Subject<boolean>();
   isAuthenticated = false;
   private user:User;

  constructor(
    private router: Router,
    //private afauth: AngularFireAuth
  ){

  }

  registerUser(authData: AuthData){
   this.user = {
     email : authData.email,
     userId : Math.round(Math.random()*1000).toString()
  };
  this.authSuccessfully();


}

login(authData: AuthData){
  this.user = {
    email : authData.email,
    userId : Math.round(Math.random()*1000).toString()
 };

this.authSuccessfully();


  }



  logout(){
    this.user=null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
   // this.isAuthenticated = false;

  }
  isAuth(){

    return this.user =null;
 }

  private authSuccessfully(){
    this.authChange.next(true);
  this.router.navigate(['/training']);
  }

  }

