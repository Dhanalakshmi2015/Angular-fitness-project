import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TrainingService } from './training/training.service';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,AuthGuard,TrainingService],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
