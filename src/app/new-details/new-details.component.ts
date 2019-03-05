import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {

  arraynews:Array<{ ID: number, TitleA: string , LongDescriptionA: string, ImageUrl: string, CreationDate:string, Views:number}>;
  id:number;
  arraycontact:Array<{FacebookURL:string, TwitterURL:string, YoutubeURL:string}>;
  i: number;
  arraytablematch:[];
  ind:number;
  constructor(private route: Router,private services:EBBFEDService,private _Activatedroute: ActivatedRoute) {
    services.get_LastNews().subscribe((res : any)=>{
      
      this.arraynews = res.Response.LastNews;
      this.id = this._Activatedroute.snapshot.params['id'];
      for (let index = 0; index < this.arraynews.length; index++) {
        console.log("LL");
        if(this.id == this.arraynews[index].ID){
          this.i = index;
          console.log(this.i)
          break;
        }
      }
    });
    services.get_ContactUs().subscribe((res:any)=>{
      this.arraycontact= res.Response.ContactUs;
    });
    services.get_FilteredTableScore().subscribe((res:any)=>{
      this.arraytablematch= res.Response.TableMatches;
    });
    this.ind=0;
   
  }
  showpage = function(url){
    
    window.open(url,"","width=700, height=600,left=100, menubar=no");
  }


  ngOnInit() {
  }

}
