import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query: string;
  dateOfBirth: string;
  constructor(private searchSvc: SearchbarService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['/register'])

  }

  findFunctionhallByNameAndCity() {
    localStorage.setItem('searchItem', this.query);
    this.router.navigateByUrl("/functionhall")

  }
  onclick() {
    this.router.navigateByUrl("/owner-login")
  }
}

