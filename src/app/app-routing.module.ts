import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { CoaheDetailsComponent } from './coahe-details/coahe-details.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { TableMatchComponent } from './table-match/table-match.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NationalMatchResultComponent } from './national-match-result/national-match-result.component';
const routes: Routes = [

  {path: '', component: MatchesComponent},
  {path: 'historyofunion', component: HistoryOfUnionComponent},
  {path: 'councilpresident', component: CouncilPresidentComponent},
  {path: 'decision', component: DecisionComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'coahes', component: CoahesComponent },
  {path: 'rulers', component: RulersComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'playerdetails/:id', component: PlayerDetailsComponent},
  {path: 'coahedetails/:id', component: CoaheDetailsComponent},
  {path: 'clubdetails/:id', component: ClubDetailComponent},
  {path: 'newdetails/:id', component: NewDetailsComponent},
  {path: 'rulerandregulation', component: RulesAndRegulationsComponent},
  {path: 'tablematch', component: TableMatchComponent},
  {path: 'matchresult', component: MatchResultsComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'nationalmatch', component: NationalMatchResultComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true , scrollPositionRestoration:"enabled"})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
