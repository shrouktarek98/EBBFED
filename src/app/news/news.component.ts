import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  arrayplayers:Array<Object>;
  arrayclubs:[];
  arraynews:[];
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_Players().subscribe((res : any)=>{
      this.arrayplayers = res.Response.Players;
    });
    services.get_Clubs().subscribe((res : any)=>{
      this.arrayclubs = res.Response.Players;
    });
    services.get_AllNews().subscribe((res : any)=>{
      this.arraynews = res.Response.News;
    });
  }

  ngOnInit() {
  }

}
