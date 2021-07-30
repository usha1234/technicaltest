import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { lastfmService } from '../services/lastfm.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-musicbrainz',
  templateUrl: './musicbrainz.component.html',
  styleUrls: ['./musicbrainz.component.css']
})
export class MusicbrainzComponent implements OnInit,AfterViewInit {
  searchInput:string;
  displayedColumns: string[] = [ 'name'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private lastfmservice:lastfmService) { }

  ngOnInit() {
  }
  getArtistsbyMusic(){
    this.lastfmservice.getArtistforMusic(this.searchInput).subscribe((response:any)=>{
      console.log(response)
      this.dataSource = response.artists
    })
  }
}
