import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/shared/services/commonservice.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  userLoggedIn = false;
  isNewUser = false;

  loginForm: FormGroup;
  constructor(private router: Router, private commonserviceService: CommonserviceService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {

      let form = this.loginForm.value;
      setTimeout(() => {
        this.commonserviceService.userLoggedIn = true;
        this.router.navigateByUrl('/organizerevent')
      }, 2000);
    }
  }
  _v() {
    return this.loginForm.value;
  }

  cancelRegistration(){
    this.router.navigateByUrl('/org');
  }
}