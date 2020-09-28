import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-functionhall',
  templateUrl: './functionhall.component.html',
  styleUrls: ['./functionhall.component.css']
})
export class FunctionhallComponent implements OnInit {

  data: any;
  query: any;
  searchParam: any;
  filteredData: any[];

  constructor(
    private searchSvc: SearchbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let searchvalue = localStorage.getItem("searchItem")
    console.log(searchvalue)
    this.searchSvc.findFunctionhallByNameAndCity(searchvalue).subscribe(data => {
      console.log(data);
      this.data = data["data"]
    })
  }
  moreInfo(id) {
    console.log(id, "id");
    this.router.navigate(['/functionhallpage', id])
  }

}