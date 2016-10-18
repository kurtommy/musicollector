import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class SpotifyService {

  private spotifyUrl = 'https://api.spotify.com/v1/';
  currentMarket = 'IT';

  constructor(private http: Http) {

  }

  searchArtist(artistName: string, market = 'IT') {
    let apiUrl = `${this.spotifyUrl}search?query=${artistName}&offset=0&limit=1&type=artist&market=${market}`;
    return this.http.get(apiUrl)
      .map((data) => {
          console.log(data.json());
          return data.json() || {};
      });
  }

  getArtistAlbums(artistId: number) {
    let apiUrl = `${this.spotifyUrl}artists/${artistId}/albums?album_type=single,album,compilation`;
    return this.http.get(apiUrl)
      .map((data) => {
          // console.log(data.json());
          return data.json() || {};
      })
      .map(this.filterMarket.bind(this));
  }

  getTracksByAlbumId(albumId: string, market = 'IT') {
    let apiUrl = `${this.spotifyUrl}albums/${albumId}/tracks?market=${market}`;
    return this.http.get(apiUrl)
      .map((data) => {
          // console.log(data.json());
          return data.json() || {};
      });
  }

  filterMarket(albums) {
    albums.items = albums.items.filter((album) => {
      return album.available_markets.some((market) => {
        return market === this.currentMarket;
      });
    });
    return albums;
  }
}
