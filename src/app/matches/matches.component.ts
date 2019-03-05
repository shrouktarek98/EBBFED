import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  arraymatchscore:any;
  arraytablematch:Array<Object>;
  arraynews:[];
  
  constructor(private route: Router,private services:EBBFEDService) { 
    services.get_MatchScore().subscribe((res : any)=>{
      this.arraymatchscore=res.Response.MatcheScore[0];
    });
    services.get_FilteredTableScore().subscribe((res : any)=>{
      this.arraytablematch=res.Response.TableMatches;
    });
    services.get_LastNews().subscribe((res : any)=>{
      this.arraynews=res.Response.LastNews;
    });
    
   
  }

  ngOnInit() {
  }

}
