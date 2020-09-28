import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { SecurityModel } from 'src/app/OwnerModule/models/security.model';
import { SecurityService } from 'src/app/OwnerModule/services/security.service';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
import { LocalStorageService } from 'src/app/OwnerModule/services/localstorage.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  mobileNumber;
  securityForm: FormGroup;

  SecurityForm;
  OwnerSecurity;
  addmobileNumber: SecurityModel;

  constructor(
    private router: Router,
    private securityservice: SecurityService,
    private _fb: FormBuilder,
    private localstorageservice: LocalStorageService,
  ) { }

  ngOnInit() {
    // this.OwnerSecurity = JSON.parse(JSON.stringify(window.localStorage.getItem('OwnerSecurity')));
    // console.log(this.OwnerSecurity)
    this.SecurityForm = this._fb.group({
      mobileNumber: new FormControl(this.OwnerSecurity ? this.OwnerSecurity.mobileNumber : '', Validators.required),
    });
  }

  back() {
    this.router.navigateByUrl("/photos")
  }

  next() {
    this.OwnerSecurity = {

      mobileNumber: this.SecurityForm.get('mobileNumber').value,
    }
    const req = {
      requestId: 1,
      mobileNumber: this.mobileNumber,
      message: "otp sent successfully"
    }
    this.securityservice.addmobileNumber(this.mobileNumber, req).subscribe(response => {
      // this.mobileNumber.push(response);
      // this.SecurityForm.reset();
    });
    this.localstorageservice.set("OwnerSecurity", JSON.stringify(this.OwnerSecurity));
    this.router.navigateByUrl("/verification")

  }

}
