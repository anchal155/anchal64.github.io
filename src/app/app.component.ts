import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AuthenticationService } from './services';
import { User, Role } from './models';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
