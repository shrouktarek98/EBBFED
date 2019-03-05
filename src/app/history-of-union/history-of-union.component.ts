import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';

@Component({
  selector: 'app-history-of-union',
  templateUrl: './history-of-union.component.html',
  styleUrls: ['./history-of-union.component.css']
})
export class HistoryOfUnionComponent implements OnInit {
  arrayhistoryunion:any;
  constructor(private route: Router,private services:EBBFEDService) { 
    services.get_HistoyUnion().subscribe((res : any)=>{
      this.arrayhistoryunion=res.Response;
    });
  }

  ngOnInit() {
  }

}
