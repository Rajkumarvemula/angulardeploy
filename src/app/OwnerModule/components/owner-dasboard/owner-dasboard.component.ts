import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-dasboard',
  templateUrl: './owner-dasboard.component.html',
  styleUrls: ['./owner-dasboard.component.css']
})
export class OwnerDasboardComponent implements OnInit {
  temp;
  constructor(private router: Router,private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data =>{
      console.log(data);
       this.temp = data.firstname;
    })
   }

  ngOnInit(): void {
   
  }

  logout(){
    this.router.navigateByUrl("/header")
  }

}
