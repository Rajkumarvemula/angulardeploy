import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchbarService } from '../../services/searchbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paygate',
  templateUrl: './paygate.component.html',
  styleUrls: ['./paygate.component.css']
})
export class PaygateComponent implements OnInit {
  temp;
  data = [];
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private http: HttpClient, private searchSvc: SearchbarService, private router: Router) { }

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.ownerFirstName,
      phone: this.payuform.phone,
      productInfo: this.payuform.name,
      amount: this.payuform.grandTotal
    }
    console.log(paymentPayload)
    return this.http.post<any>('http://localhost:8057/api/payment-details', paymentPayload).subscribe(
      data => {
        console.log(data);
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.fUrl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
      }, error1 => {
        console.log(error1);
      })
  }

  ngOnInit() {
    this.temp = this.router.url.split("/").slice(-1).pop();
    localStorage.getItem("searchItem")
    console.log(this.temp);

    this.getFunctionHallData();

  }

  getFunctionHallData() {
    //  this.functionHall = [];
    //  var me = this
    let searchvalue = localStorage.getItem("searchItem")

    this.searchSvc.findFunctionhallByNameAndCity(searchvalue)
      .subscribe(Response => {
        let resData = Response.data;
        console.log(resData, "res")
        // let res Response;
        console.log(this.temp, "28");
        resData.forEach(element => {
          if (this.temp == element.ownerId) {
            console.log(element);
            this.payuform = element;
            console.log(this.payuform)
          }
        });
        // console.log(Response,"response")

      }, (error) => { console.log(error); })
  }

}