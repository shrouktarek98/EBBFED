import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  arraycompetitions:Array<Object>;
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Competition().subscribe((res : any)=>{
      this.arraycompetitions = res.Response.AllCompetitions;
    });
  }

  ngOnInit() {
  }

}
