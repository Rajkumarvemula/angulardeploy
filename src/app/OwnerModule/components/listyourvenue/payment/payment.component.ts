import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
import { PaymentService } from 'src/app/OwnerModule/services/payment.service';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  PaymentForm;
  OwnerPayment;

  var_one: any;
  insertStatus: any;

  constructor(
    private router: Router,
    private Payser: PaymentService,
    private _fb: FormBuilder,
    private sessionstorageservice: SessionStorageService,
  ) { }

  ngOnInit() {
    this.OwnerPayment = JSON.parse(JSON.stringify(window.sessionStorage.getItem('OwnerPayment')));
    this.PaymentForm = this._fb.group({
      perminantcountry: new FormControl(this.OwnerPayment ? this.OwnerPayment.perminantcountry : '', Validators.required),
      bankingcountry: new FormControl(this.OwnerPayment ? this.OwnerPayment.bankingcountry : '', Validators.required),
    });

  }

  back() {
    this.router.navigateByUrl("/security")
  }

  next() {
    this.router.navigateByUrl("/publishlisting")
    this.OwnerPayment = {
      perminantcountry: this.PaymentForm.get('perminantcountry').value,
      bankingcountry: this.PaymentForm.get('bankingcountry').value,

    }

    this.sessionstorageservice.set("OwnerPayment",this.OwnerPayment);

  }

}


