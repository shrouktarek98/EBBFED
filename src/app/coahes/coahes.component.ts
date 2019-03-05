import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';

@Component({
  selector: 'app-coahes',
  templateUrl: './coahes.component.html',
  styleUrls: ['./coahes.component.css']
})
export class CoahesComponent implements OnInit {

  arraycoahes:Array<Object>;
  arrayclubcoahes:Array<Object>;
  arrayclubs:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Goahes().subscribe((res : any)=>{
      this.arraycoahes = res.Response.Coahes;
      this.arrayclubcoahes = res.Response.Coahes;
    });
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
    });
  }
  done = function(search){
    let select = search.selectclub;
    this.arrayclubcoahes = this.arraycoahes.filter(it => it['ClubName'] == select) ; 
  }
  ngOnInit() {
  }

}
