import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EBBFEDService } from './../ebbfed.service';
@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.css']
})
export class MatchResultsComponent implements OnInit {

  arraytablematch:Array<Object>;
  arraytablematchsearch:Array<Object>;
  arrayage:Array<Object>;
  arraydevision:Array<Object>;

  constructor(private route: Router,private services:EBBFEDService) {
    services.get_FilteredTableScore().subscribe((res : any)=>{
      this.arraytablematch = res.Response.TableMatches;
      this.arraytablematchsearch= res.Response.TableMatches;
    });
    services.get_AllAge().subscribe((res : any)=>{
      this.arrayage = res.Response.Ages;
    });
    services.get_AllDivision().subscribe((res : any)=>{
      this.arraydevision = res.Response.Divisions;
    });
  }
  done = function(search){
    console.log(search);
    let selectagee = search.selectage;
    console.log(selectagee);
    let selectdevisionn = search.selectdevision;
    if(selectagee!=null){
      this.arraytablematchsearch = this.arraytablematch.filter(it => it['AgeID'] == selectagee) ;
    }
    if(selectdevisionn!=null){
      this.arraytablematchsearch = this.arraytablematch.filter(it => it['DivisionID'] == selectdevisionn) ;
    }
  }
  ngOnInit() {
  }

}
