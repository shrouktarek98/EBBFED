import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  arrayplayers:Array<{ ID: number, NameA: string , Age:number, Position: string, Height:number
    Weight: number, InternationalMatches:number, PlayerType:string, ClubID: number, ClubName:string
    ImageUrl:string, PlayerNumber: number, Transfar: [], PreviousClubs: Array<{ClubName: string, YearFrom:number, YearTo:number}>  }>;
  id:number;
  playerdetails:{ ID: number, NameA: string , Age:number, Position: string, Height:number
    Weight: number, InternationalMatches:number, PlayerType:string, ClubID: number, ClubName:string
    ImageUrl:string, PlayerNumber: number, Transfar: [], PreviousClubs: Array<{ClubName: string, YearFrom:number, YearTo:number}>  };
  arraycontact:Array<Object>;
  constructor(private route: Router,private services:EBBFEDService,private _Activatedroute: ActivatedRoute) {
    services.get_Players().subscribe((res : any)=>{
      this.arrayplayers = res.Response.Players;
      this.id = this._Activatedroute.snapshot.params['id'];

      for (let index = 0; index < this.arrayplayers.length; index++) {
        if(this.id == this.arrayplayers[index].ID){
          this.playerdetails = this.arrayplayers[index];
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
