import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-rulers',
  templateUrl: './rulers.component.html',
  styleUrls: ['./rulers.component.css']
})
export class RulersComponent implements OnInit {

  arrayrulers:Array<Object>;
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Rulers().subscribe((res : any)=>{
      this.arrayrulers = res.Response.Judges;
    });
  }

  ngOnInit() {
  }

}
