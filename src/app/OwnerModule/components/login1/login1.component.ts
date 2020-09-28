import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl("/dashboard")
  }

}
