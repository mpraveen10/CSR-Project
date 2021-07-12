import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/shared/services/commonservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{

  userLoggedIn = false;
  isNewUser = false;

  loginForm: FormGroup;
  constructor(private router: Router, private commonserviceService: CommonserviceService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {

      let form = this.loginForm.value;
      if(form.password === 'test' && form.email === 'praveen@gmail.com'){

      setTimeout(() => {  this.commonserviceService.userLoggedIn = true;
        this.router.navigateByUrl('/employeeevent')
      }, 2000);
    }
    else{
      alert('Username or password incorrect. Please try again.')
    }
      
    }
  }
  _v() {
    return this.loginForm.value;
  }

  cancelRegistration(){
    this.router.navigateByUrl('/emp');
  }
}
