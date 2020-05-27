import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from 'src/app/shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  providers: [HttpClientModule],
})
export class AuthModule { }
