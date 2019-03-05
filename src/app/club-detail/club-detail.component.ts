import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {

  public arrayclubs:Array<{ ID: number, NameA: string , DescriptionA: string,EstablishedYear:number,TitlesWon:string,Division:string, Logo: any, Area:any}>;
  public id:number;
  public clubdetails:{ ID: number, NameA: string , DescriptionA: string,EstablishedYear:number,TitlesWon:string,Division:string, Logo: any, Area:any};
  public arraycontact:Array<{FacebookURL:string, TwitterURL:string, YoutubeURL:string}>;
  public arrayplayers:Array<{ClubID:number}>;
  public arraygallery:Array<{ClubID:number}>;
  constructor(private route: Router,private services:EBBFEDService,private _Activatedroute: ActivatedRoute) {
    
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
      this.id = this._Activatedroute.snapshot.params['id'];
      
      for (let index = 0; index < this.arrayclubs.length; index++) {
        if(this.id == this.arrayclubs[index].ID){
          this.clubdetails = this.arrayclubs[index];
          break;
        }
      }
    });
    
    services.get_Players().subscribe((res:any)=>{
      this.arrayplayers= res.Response.Players;
    });
    services.get_AllGallery().subscribe((res:any)=>{
      this.arraygallery= res.Response.Gallery;
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
