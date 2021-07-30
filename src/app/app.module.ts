import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastfmComponent } from './lastfm/lastfm.component';
import { MusicbrainzComponent } from './musicbrainz/musicbrainz.component';
import { HttpClientModule } from '@angular/common/http';
import { lastfmService } from './services/lastfm.service';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule}  from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LastfmComponent,
    MusicbrainzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [lastfmService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
   library.add(faSearch)
  }
}
