import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  arraygallery:Array<Object>;
  
  constructor(private route: Router,private services:EBBFEDService) {
    services.get_AllGallery().subscribe((res : any)=>{
      this.arraygallery = res.Response.Gallery;
    });
    
  }

  ngOnInit() {
  }

}
