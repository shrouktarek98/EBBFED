import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {

  arraycontact:{PhoneNumber:string, Address:string, Email:string, LocationLong:string, LocationLat:string, WorkingHours:string, FacebookURL:string, TwitterURL:string, InstagramURL:string, YoutubeURL:string};
  
  
  constructor(private route: Router,private services:EBBFEDService) { 
    services.get_ContactUs().subscribe((res : any)=>{
      this.arraycontact=res.Response.ContactUs[0];
      // console.log(this.arraycontact);
    });
    
    
   
  }

  ngOnInit() {
  }

}
