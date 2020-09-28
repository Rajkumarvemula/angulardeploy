import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/OwnerModule/services/localstorage.service';

import { registermodel } from 'src/app/OwnerModule/models/owner-register.model';
import { RegisterService } from 'src/app/OwnerModule/services/owner-register.service';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent implements OnInit {

  RegisterForm : FormGroup;
  RegisterDetails: any;
  registermodel: registermodel[] = []

  constructor(private router: Router,
    private _fb: FormBuilder,
    private RegSer: RegisterService,
    private localstorageservice: LocalStorageService) { }

  ngOnInit(): void {
    this.RegisterDetails = JSON.parse(window.localStorage.getItem('RegisterDetails'));
    this.RegisterForm = this._fb.group({
      firstName: new FormControl(this.RegisterDetails ? this.RegisterDetails.firstName : '', Validators.required),
      lastName: new FormControl(this.RegisterDetails ? this.RegisterDetails.lastName : '', Validators.required),
      userId: new FormControl(this.RegisterDetails ? this.RegisterDetails.userId : '', Validators.required),
      email: new FormControl(this.RegisterDetails ? this.RegisterDetails.email : '', Validators.required),
      mobileNumber: new FormControl(this.RegisterDetails ? this.RegisterDetails.mobileNumber : '', [Validators.minLength(10),Validators.required,Validators.pattern("^((\\+91-?))+[0-9]{10}$")]),
  }
    )
  }

  register(){
    this.RegisterDetails = {
      firstName: this.RegisterForm.get('firstName').value,
      lastName: this.RegisterForm.get('lastName').value,
      userId: this.RegisterForm.get('userId').value,
      mobileNumber: this.RegisterForm.get('mobileNumber').value,
      email: this.RegisterForm.get('email').value
    }
    console.log(this.RegisterDetails)
    this.RegSer.registerUser(this.RegisterDetails).subscribe(
      (data) => {
       console.log(data);
       (error: any) => console.log(error)
        this.router.navigateByUrl("/owner-login")
      }
    )
  }
  onclick(){
    this.router.navigateByUrl("/owner-login")
  }
  
}