import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl('',{
        validators:[Validators.required,Validators.email]
      }),
      password:new FormControl('', {
        validators:[Validators.required]
      })
     });
  }

  onSubmit(form:NgForm){
    this.authService.login({
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    });
  }

  // onSubmit(form:NgForm){
  //   this.authService.login({
  //     email: form.value.email,
  //     password:form.value.password
  //   });

  }

