import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { UserService } from './login/service/user.service';
import { AuthGuardService } from './guards/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
