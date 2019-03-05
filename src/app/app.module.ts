import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EBBFEDService } from './ebbfed.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { MatchesComponent } from './matches/matches.component';
import { HistoryOfUnionComponent } from './history-of-union/history-of-union.component';
import { CouncilPresidentComponent } from './council-president/council-president.component';
import { DecisionComponent } from './decision/decision.component';
import { PlayersComponent } from './players/players.component';
import { CoahesComponent } from './coahes/coahes.component';
import { RulersComponent } from './rulers/rulers.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CheckDirective } from './check.directive';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { CoaheDetailsComponent } from './coahe-details/coahe-details.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { RulesComponent } from './rules/rules.component';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { TableMatchComponent } from './table-match/table-match.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NationalMatchResultComponent } from './national-match-result/national-match-result.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    MatchesComponent,
    HistoryOfUnionComponent,
    CouncilPresidentComponent,
    DecisionComponent,
    PlayersComponent,
    CoahesComponent,
    RulersComponent,
    ClubsComponent,
    CheckDirective,
    NewsComponent,
    GalleryComponent,
    PlayerDetailsComponent,
    CoaheDetailsComponent,
    ClubDetailComponent,
    NewDetailsComponent,
    RulesComponent,
    RulesAndRegulationsComponent,
    TableMatchComponent,
    MatchResultsComponent,
    CompetitionsComponent,
    NationalMatchResultComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EBBFEDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
