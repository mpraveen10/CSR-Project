
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeeventComponent } from './modules/events/employeeevent/employeeevent.component';
import { OrganizereventComponent } from './modules/events/organizerevent/organizerevent.component';
import { EmployeeComponent } from './modules/login/employee/employee.component';
import { OrganizerComponent } from './modules/login/organizer/organizer.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent,
    },
    {
      path: 'emp',
      component: EmployeeComponent,
    },
    {
      path: 'org',
      component: OrganizerComponent,
    },
    {
      path: 'employeeevent',
      component: EmployeeeventComponent,
    },
    {
      path: 'organizerevent',
      component: OrganizereventComponent,
    }
  ],
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
