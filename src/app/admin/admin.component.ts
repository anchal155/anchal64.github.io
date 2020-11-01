import { Component, OnInit } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';
import {CommonModule} from '@angular/common';

import { User } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
  });
  }

}
