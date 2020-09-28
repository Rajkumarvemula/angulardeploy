import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DetailsModel } from 'src/app/OwnerModule/models/details.model';

import { LocalStorageService } from 'src/app/OwnerModule/services/localstorage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 

  DetailsForm: FormGroup;;
  OwnerDetails:any;
  detailsmodel: DetailsModel[] = [];

  constructor(
    private router: Router,
    
    private _fb: FormBuilder,
    private localstorageservice: LocalStorageService

  ) { }

  ngOnInit(): void {
    this.OwnerDetails = JSON.parse(window.localStorage.getItem('OwnerDetails'));
    this.DetailsForm = this._fb.group({

      name: new FormControl(this.OwnerDetails ? this.OwnerDetails.name : '', Validators.required),
      ownerFirstName: new FormControl(this.OwnerDetails ? this.OwnerDetails.ownerFirstName : '', Validators.required),
      ownerLastName: new FormControl(this.OwnerDetails ? this.OwnerDetails.ownerLastName : '', Validators.required),
      functionhallPrice: new FormControl(this.OwnerDetails ? this.OwnerDetails.functionhallPrice : '', Validators.required),
      functionhalldescription: new FormControl(this.OwnerDetails ? this.OwnerDetails.functionhalldescription : '', Validators.required),
      functionhalltype: new FormControl(this.OwnerDetails ? this.OwnerDetails.functionhalltype : '', Validators.required),
      maximumguest: new FormControl(this.OwnerDetails ? this.OwnerDetails.maximumguest : '', Validators.required),
      briderooms: new FormControl(this.OwnerDetails ? this.OwnerDetails.briderooms : '', Validators.required),
      // AMENITIES
      parking: new FormControl(this.OwnerDetails ? this.OwnerDetails.parking : '', Validators.required),
      internet: new FormControl(this.OwnerDetails ? this.OwnerDetails.internet : '', Validators.required),
      nosmoking: new FormControl(this.OwnerDetails ? this.OwnerDetails.nosmoking : '', Validators.required),
      airconditioning: new FormControl(this.OwnerDetails ? this.OwnerDetails.airconditioning : '', Validators.required),
      lightingsystem: new FormControl(this.OwnerDetails ? this.OwnerDetails.lightingsystem : '', Validators.required),
      dancefloor: new FormControl(this.OwnerDetails ? this.OwnerDetails.dancefloor : '', Validators.required),
      noalcohol: new FormControl(this.OwnerDetails ? this.OwnerDetails.noalcohol : '', Validators.required),
      soundsystem: new FormControl(this.OwnerDetails ? this.OwnerDetails.soundsystem : '', Validators.required),
      //eventType
      banquethall: new FormControl(this.OwnerDetails ? this.OwnerDetails.banquethall : '', Validators.required),
      partyroom: new FormControl(this.OwnerDetails ? this.OwnerDetails.partyroom : '', Validators.required),
      conference: new FormControl(this.OwnerDetails ? this.OwnerDetails.conference : '', Validators.required),
      performance: new FormControl(this.OwnerDetails ? this.OwnerDetails.performance : '', Validators.required),
      weddinghall: new FormControl(this.OwnerDetails ? this.OwnerDetails.weddinghall : '', Validators.required),
      eventspace: new FormControl(this.OwnerDetails ? this.OwnerDetails.eventspace : '', Validators.required),
      nightclub: new FormControl(this.OwnerDetails ? this.OwnerDetails.nightclub : '', Validators.required),

    }
    )
  }


  back() {
    this.router.navigateByUrl("/location");

  }
  onclick() {

    this.OwnerDetails = {

      name: this.DetailsForm.get('name').value,
      ownerFirstName: this.DetailsForm.get('ownerFirstName').value,
      ownerLastName: this.DetailsForm.get('ownerLastName').value,
      functionhalldescription: this.DetailsForm.get('functionhalldescription').value,
      functionhalltype: this.DetailsForm.get('functionhalltype').value,
      functionhallPrice: this.DetailsForm.get('functionhallPrice').value,
      maximumguest: this.DetailsForm.get('maximumguest').value,
      briderooms: this.DetailsForm.get('briderooms').value,
      // AMENITIES
      parking: this.DetailsForm.get('parking').value,
      internet: this.DetailsForm.get('internet').value,
      nosmoking: this.DetailsForm.get('nosmoking').value,
      airconditioning: this.DetailsForm.get('airconditioning').value,
      lightingsystem: this.DetailsForm.get('lightingsystem').value,
      noalcohol: this.DetailsForm.get('noalcohol').value,
      soundsystem: this.DetailsForm.get('soundsystem').value,
      dancefloor: this.DetailsForm.get('dancefloor').value,
      //eventType
      banquethall: this.DetailsForm.get('banquethall').value,
      partyroom: this.DetailsForm.get('partyroom').value,
      conference: this.DetailsForm.get('conference').value,
      performance: this.DetailsForm.get('performance').value,
      weddinghall: this.DetailsForm.get('weddinghall').value,
      eventspace: this.DetailsForm.get('eventspace').value,
      nightclub: this.DetailsForm.get('nightclub').value,



      // eventType: new FormControl(this.OwnerDetails ? this.OwnerDetails.eventType : ''),

    //   imageUrl: [
    
    // ]



    }



    // }

    // this.details.addDetails(this.OwnerDetails).subscribe(
    //   (data: DetailsModel) => {
    //     console.log(data);

    //   },
    //   (error: any) => console.log(error)
    // )
    this.localstorageservice.set("OwnerDetails", this.OwnerDetails);
    this.router.navigateByUrl("/photos");
  }









}


