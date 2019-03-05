import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-council-president',
  templateUrl: './council-president.component.html',
  styleUrls: ['./council-president.component.css']
})
export class CouncilPresidentComponent implements OnInit {
  arraycouncilpresident:Array<Object>;
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_CouncilPresident().subscribe((res : any)=>{
      this.arraycouncilpresident = res.Response.CouncilPresident;
    });
  }

  ngOnInit() {
  }

}
