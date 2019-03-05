import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  arrayplayers:  Array<{ID:Number, NameA:string, NameE:string, Age:Number, Position:string, Height:number , Weight:number, InternationalMatches:Number , PlayerType:string, ClubID:Number, ClubName:string, ImageUrl:string, PlayerNumber:number, Transfar:Array<{TransfarFrom:string, TransfarTo:string, Year:number}>, PreviousClubs: Array<{ClubName:string, YearFrom:number, YearTo:number}> }>;
  arrayplayerclub:Array<{ID:Number, NameA:string, NameE:string, Age:Number, Position:string, Height:number , Weight:number, InternationalMatches:Number , PlayerType:string, ClubID:Number, ClubName:string, ImageUrl:string, PlayerNumber:number, Transfar:Array<{TransfarFrom:string, TransfarTo:string, Year:number}>, PreviousClubs: Array<{ClubName:string, YearFrom:number, YearTo:number}> }>;
  o : {ID:Number, NameA:string, NameE:string, Age:Number, Position:string, Height:number , Weight:number, InternationalMatches:Number , PlayerType:string, ClubID:Number, ClubName:string, ImageUrl:string, PlayerNumber:number, Transfar:Array<{TransfarFrom:string, TransfarTo:string, Year:number}>, PreviousClubs: Array<{ClubName:string, YearFrom:number, YearTo:number}> };
  arrayclubs:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Players().subscribe((res : any)=>{
      this.arrayplayers = res.Response.Players;
      this.arrayplayerclub = res.Response.Players;
    });
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
    });

  }

  ngOnInit() {
  }
  done = function(search){
    let select = search.selectclub;
    this.arrayplayerclub = this.arrayplayers.filter(it => it['ClubID'] == select) ;  
    console.log(this.arrayplayerclub);
    console.log(search.searchterm);
  }
 
}
