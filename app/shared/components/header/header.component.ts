import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonserviceService } from '../../services/commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  userLoggedIn = true;

  constructor(private commonserviceService: CommonserviceService) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  signOut(){
    this.commonserviceService.userLoggedIn = false;
  }

}
