import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-national-match-result',
  templateUrl: './national-match-result.component.html',
  styleUrls: ['./national-match-result.component.css']
})
export class NationalMatchResultComponent implements OnInit {

  arraynationalmatch:Array<Object>;
  arrayclubs:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_AllNationalMatcheScore().subscribe((res : any)=>{
      this.arraynationalmatch = res.Response.MatcheScore;
    });
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
    });
  }

  ngOnInit() {
  }

}
