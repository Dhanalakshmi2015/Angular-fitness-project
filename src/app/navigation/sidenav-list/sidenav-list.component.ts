import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
 @Output() closeSidenav  = new EventEmitter<void>();
 isAuth: boolean =false;
 private authSubscription : Subscription;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe( authStatus =>{
      this.isAuth = authStatus;
    });
  }

  onClose(){
    this.closeSidenav.emit();
  }
  onLogout(){
    this.onClose();
    this.authService.logout();

  }
}
