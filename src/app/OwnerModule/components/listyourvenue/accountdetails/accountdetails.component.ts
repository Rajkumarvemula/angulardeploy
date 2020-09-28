import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountDetailsService } from 'src/app/OwnerModule/services/accountDetails.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  AccountdetailsForm:FormGroup ;
  OwnerAccountdetails :any;
  accountDetailsModel = [];


  bankInfo = [];
  bankbranchInfo: any;
  bankbranchIfscInfo: any;
  selBankName;
  constructor(private router: Router,
    private accountDetails: accountDetailsService,
    private _fb: FormBuilder,
    private sessionstorageservice: SessionStorageService) { }

  ngOnInit(): void {
    this.OwnerAccountdetails = JSON.parse(window.sessionStorage.getItem('OwnerAccountdetails'));
    this.AccountdetailsForm = this._fb.group({
      accountNumber: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.accountNumber : '', Validators.pattern('[0-9 -()+]+$')),
      accountName: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.accountName : '', Validators.required),
      accountType: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.accountType : '', Validators.required),
      bank: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.bank : '', Validators.required),
      branch: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.branch : '', Validators.required),
      ifsc: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.ifsc : '', Validators.required),
      panNumber: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.panNumber : '', Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$')),
      Tandc: new FormControl(this.OwnerAccountdetails ? this.OwnerAccountdetails.Tandc : '', Validators.required),
    });

  this.getBankDetails();
}
getBankDetails() {
  this.accountDetails.getBanks().subscribe(data => {
    console.log(data);
    this.bankInfo = data.data;
    console.log(this.bankInfo);
  })
}
back() {
  this.router.navigateByUrl("/payment")
}
getBranches(value) {
  this.selBankName = value
  this.accountDetails.getBranches(value).subscribe(branch => {
    console.log(branch.data)
    this.bankbranchInfo = branch.data;
  })
}
getIFSC(value) {
  console.log(this.selBankName, value)
  this.accountDetails.getBranchIfsc(this.selBankName, value).subscribe(branch => {
    console.log(branch.data)
    this.bankbranchIfscInfo = branch.data;
  })
}
onclick() {
  this.OwnerAccountdetails = {
    accountNumber: this.AccountdetailsForm.get('accountNumber').value,
    accountName: this.AccountdetailsForm.get('accountName').value,
    accountType: this.AccountdetailsForm.get('accountType').value,
    bank: this.AccountdetailsForm.get('bank').value,
    branch: this.AccountdetailsForm.get('branch').value,
    ifsc: this.AccountdetailsForm.get('ifsc').value,
    panNumber: this.AccountdetailsForm.get('panNumber').value,
    Tandc: this.AccountdetailsForm.get('Tandc').value,
  }
  this.sessionstorageservice.set("OwnerAccountdetails", this.OwnerAccountdetails);
  // this.accountDetails.addAccountDetails(this.OwnerAccountdetails).subscribe(
  //   (data: accountDetailsModel) => {
  //     console.log(data);
  //     // this.sessionstorageservice.set("OwnerPaymentdetails", this.OwnerPaymentdetails);
  //   },
  //   (error: any) => console.log(error)
  // )
  console.log("PAYDET22");
  this.router.navigateByUrl("/publishlisting")
}
}
