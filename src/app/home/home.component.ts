import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {CommonModule} from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { User } from '../models';
import { UserService, AuthenticationService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {  

  currentUser: User;
    userFromApi: User;

  constructor( private userService: UserService,
    private authenticationService: AuthenticationService) {
      this.currentUser = this.authenticationService.currentUserValue;
     }


  ngOnInit(): void {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
      this.userFromApi = user;
  });
  }

}
