import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent,
  canActivate:[AuthGuardService]
 
  },
  {path: 'dashboard',  component: DashboardComponent,
  canActivate : [AuthGuardService]
  },
  {path: '', pathMatch:'full' , redirectTo:'/login' },
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
