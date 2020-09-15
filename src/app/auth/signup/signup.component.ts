import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate;
  constructor( private authService:AuthService) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  // onSubmit(projectForm: NgForm){
  //   console.log(projectForm);
  // }

  onSubmit(form:NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password:form.value.password
    });
  }

}
