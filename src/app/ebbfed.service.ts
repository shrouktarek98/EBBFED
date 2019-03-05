import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EBBFEDService {

  constructor(private http: HttpClient) { }
  get_MatchScore() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Matches/MatcheScore"); 
  }
  get_FilteredTableScore() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Matches/FilteredTableMatches?AgeID=0&DivisionID=0&RoundID=0"); 
  }
  get_HistoyUnion() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Union/HistoryUnion"); 
  }
  get_CouncilPresident() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Union/CouncilPresident"); 
  }
  get_Decision() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Union/Decisions"); 
  }
  get_Players() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Players/AllPlayers"); 
  }
  get_Goahes() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Coahes/AllCoahes"); 
  }
  get_Rulers() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Judges/AllJudges"); 
  }
  get_Clubs() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs"); 
  }
  get_AllDivision() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllDivisions"); 
  }
  get_AllNews() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/News/AllNews"); 
  }
  get_AllGallery() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllGallery"); 
  }
  get_ContactUs() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/ContactUs/ContactUs"); 
  }
  get_LastNews() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/News/LastNews"); 
  }
  get_ImportantNews() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/News/ImportantNews"); 
  }
  get_AllRules() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Rules/AllRules"); 
  }
  get_AllAge() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllAges"); 
  }
  get_Competition() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/Competitions/AllCompetitions"); 
  }
  get_AllNationalMatcheScore() {
    return this.http.get("http://yakensolution.cloudapp.net/EBBFED/api/NationalMatches/MatcheScore"); 
  }
}

