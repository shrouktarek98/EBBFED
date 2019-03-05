import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-rules-and-regulations',
  templateUrl: './rules-and-regulations.component.html',
  styleUrls: ['./rules-and-regulations.component.css']
})
export class RulesAndRegulationsComponent implements OnInit {

  arrayrules:Array<Object>;
  arrayclubs:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_AllRules().subscribe((res : any)=>{
      this.arrayrules = res.Response.Rules;
    });
    
  }

  ngOnInit() {
  }

}
