import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizereventComponent } from './organizerevent/organizerevent.component';
import { EmployeeeventComponent } from './employeeevent/employeeevent.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrganizereventComponent, EmployeeeventComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
