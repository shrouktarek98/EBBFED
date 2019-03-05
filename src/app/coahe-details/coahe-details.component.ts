import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-coahe-details',
  templateUrl: './coahe-details.component.html',
  styleUrls: ['./coahe-details.component.css']
})
export class CoaheDetailsComponent implements OnInit {

  arraycoahes:Array<{ ID: number, NameA: string , DescriptionA: string, ImageUrl: string, Category:string, Age:number, ClubName:string}>;
  id:number;
  coahedetails:{ ID: number, NameA: string , DescriptionA: string, ImageUrl: string, Category:string, Age:number, ClubName:string};
  arraycontact:Array<{FacebookURL:string, TwitterURL:string, YoutubeURL:string}>;
 
  constructor(private route: Router,private services:EBBFEDService,private _Activatedroute: ActivatedRoute) {
    services.get_Goahes().subscribe((res : any)=>{
      this.arraycoahes = res.Response.Coahes;
      this.id = this._Activatedroute.snapshot.params['id'];

      for (let index = 0; index < this.arraycoahes.length; index++) {
        if(this.id == this.arraycoahes[index].ID){
          this.coahedetails = this.arraycoahes[index];
          break;
        }
      }
    });
    services.get_ContactUs().subscribe((res:any)=>{
      this.arraycontact= res.Response.ContactUs;
    });
   
  }
  showpage = function(url){
    
    window.open(url,"","width=700, height=600,left=100, menubar=no");
  }

  ngOnInit() {
  }

}
