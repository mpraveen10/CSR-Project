import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/shared/services/commonservice.service';

@Component({
  selector: 'app-organizerevent',
  templateUrl: './organizerevent.component.html',
  styleUrls: ['./organizerevent.component.scss']
})
export class OrganizereventComponent implements OnInit {

  public view : string = 'default';
  constructor(private commonservice: CommonserviceService, private router: Router) {}

  ngOnInit() {
    if(this.commonservice.userLoggedIn === false)
    this.router.navigateByUrl('/org')
  }

  onSubmit(event: string){
    this.view = event;
  }

  checkView(view: string)
  {
    return this.view === view;
  }

  cancel(){
    this.view = 'default';
  }

  onAdd(){
    alert('Event added successfully');
  }
}
