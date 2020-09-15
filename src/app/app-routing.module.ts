import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'training',
    component:TrainingComponent,
   // canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
