import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from 'src/app/UserModule/services/searchbar.service';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-functionhallpage',
  templateUrl: './functionhallpage.component.html',
  styleUrls: ['./functionhallpage.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class FunctionhallpageComponent implements OnInit {
  // myIndex = 0;

  hallPrice = 75000;

  grandTotal: any;


  dateOfBirth: string;

  temp;
  data = [];
  searchParam: any;
  filteredData: any[];
  constructor(
    private searchSvc: SearchbarService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.carousel();

    this.grandTotal = this.hallPrice + this.hallPrice * 0.18;

    this.temp = this.router.url.split("/").slice(-1).pop();
    localStorage.getItem("searchItem")
    console.log(this.temp);

    this.getFunctionHallData();
  }
  getFunctionHallData() {

    let searchvalue = localStorage.getItem("searchItem")

    this.searchSvc.findFunctionhallByNameAndCity(searchvalue)
      .subscribe(Response => {
        let resData = Response.data;
        console.log(resData, "res")
        console.log(this.temp, "28");
        resData.forEach(element => {
          if (this.temp == element.ownerId) {
            console.log(element);
            this.data.push(element)
          }
        });

      }, (error) => { console.log(error); })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

  moreInfo(id) {
    console.log("id");
    this.router.navigate(['/paygate', id])

  }

  // carousel() {
  //   var i = 0;
  //   var x = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++){
  //     x[i].style.display = "none"; 
  //   }
  //   this.myIndex++;
  //   if (this.myIndex > x.length) { this.myIndex = 1 }
  //   x[this.myIndex - 1].style.display = "block";
  //   setTimeout(this.carousel, 2000);
  // }

}   