import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastfmComponent } from './lastfm/lastfm.component';
import { MusicbrainzComponent } from './musicbrainz/musicbrainz.component';


const routes: Routes = [
  { path: 'lastfm', component: LastfmComponent },
  { path: 'musicbrainz', component: MusicbrainzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
