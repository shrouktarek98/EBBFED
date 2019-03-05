import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  arraydivision:Array<Object>;
  arrayclubdivision:Array<Object>;
  arrayclubs:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_AllDivision().subscribe((res : any)=>{
      this.arraydivision = res.Response.Divisions;
      
    });
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
      this.arrayclubdivision= res.Response.Players;
    });
  }
  
  done = function(search){
    let select = search.selectclub;
    this.arrayclubdivision = this.arrayclubs.filter(it => it['Division'] == select) ;  
  }
  ngOnInit() {
  }

}
