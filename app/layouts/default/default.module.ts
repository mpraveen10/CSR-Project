import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { LoginModule } from 'src/app/modules/login/login.module';
import { DefaultComponent } from './default.component';
import { EventsModule } from 'src/app/modules/events/events.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    EventsModule,
    RouterModule,
    MatSidenavModule
  ],
  providers: [
  ]
})
export class DefaultModule { }
