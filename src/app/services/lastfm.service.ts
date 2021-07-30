import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class lastfmService{

    constructor(private http:HttpClient){

    }
    getArtist(value){
    let searchkey=value
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+searchkey+'&api_key=22f6f8c4bfaa2a0347a01d1ed563d76a&format=json')
    }
    getArtistforMusic(value){
        let searchKey=value
        return this.http.get("http://musicbrainz.org/ws/2/artist/?query=artist:"+searchKey+"%20AND%20type:group%20AND%20country:US")
    }
}