import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/shared/services/commonservice.service';

@Component({
  selector: 'app-employeeevent',
  templateUrl: './employeeevent.component.html',
  styleUrls: ['./employeeevent.component.scss']
})
export class EmployeeeventComponent implements OnInit {
  
  public view : string = 'default';
  constructor(private commonservice: CommonserviceService, private router: Router) { }

  ngOnInit() {
    if(this.commonservice.userLoggedIn === false)
    this.router.navigateByUrl('/emp')
  }

  onCreate(event: string){
    this.view = event;
  }

  checkView(view: string)
  {
    return this.view === view;
  }

  cancel(){
    this.view = 'default';
  }
}
