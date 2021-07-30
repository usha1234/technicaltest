import { Component, OnInit, ViewChild } from '@angular/core';
import { lastfmService } from '../services/lastfm.service';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.css']
})
export class LastfmComponent implements OnInit {
  searchInput:any ='';
  displayedColumns: string[] = [ 'image','name','shortlist'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private lasfmService:lastfmService,faConfig:FaConfig) {
    faConfig.defaultPrefix = "fas"
   }

  ngOnInit() {
   
  }

  getArtists(value){
    this.lasfmService.getArtist(this.searchInput).subscribe((response:any)=>{
      this.dataSource = response.results.artistmatches.artist
    })
  }
}
