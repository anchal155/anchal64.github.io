import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{ 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard], 
    data: { roles: [Role.Admin] } 
},
{ 
    path: 'login', 
    component: LoginComponent 
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
