import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  arraydecision:Array<Object>;
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Decision().subscribe((res : any)=>{
      this.arraydecision = res.Response.Decision;
    });
  }
  ngOnInit() {
  }

}
