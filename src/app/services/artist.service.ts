import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { SpotifyService } from './spotify.service';
import { StorageService } from './storage.service';
import { Artist } from '.';

@Injectable()
export class ArtistService implements OnInit {
  artist: Artist = {};
  album: any = {};
  tracks: any = [];

  // constructor(private http: Http, private spotify: SpotifyService, private db: DbService) {}
  constructor(private http: Http, private spotify: SpotifyService, private storage: StorageService) {
  }

  ngOnInit() {
  }

  createArtist(artist: Artist) {
    // fetch data from spotify and store artist data
    // artist.id = 321;
    this.spotify.searchArtist(artist.name)
      .subscribe((spotfyArtist: any) => {
        console.log(spotfyArtist);
        this.storage.createArtist(spotfyArtist.artists.items[0]);
        // this.artist = Object.assign({}, this.artist, {albums: albums.items || {}});
        // console.log(this.artist);
      });
    // this.fetchArtistMetadata(artist);
    // 
  }

  getArtists() {
    // TODO: this list will come from firebase
    this.storage.getArtists();
    return this.storage.artists;
  }

  searchArtistByName(query) {
    this.storage.searchArtistByName(query);
  }

  get artists() {
    console.log('cal');
    return this.storage.getArtists();
  }

  fetchArtistMetadata(artist: Artist) {
    this.spotify.searchArtist(artist.name)
      .subscribe((artist: any) => {
        console.log(artist);
        // this.artist = Object.assign({}, this.artist, {albums: albums.items || {}});
        // console.log(this.artist);
      });
  }

  loadArtistByName(artistName: string) {
    // Load tags from last Fm by artist id

    let lastFmApiKey = 'b19a498a67ed025d1a48b2c7824d1121';
    let lastFmApiUrl = 
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${artistName}&api_key=${lastFmApiKey}&format=json`;

    this.http.get(lastFmApiUrl)
      .map((data) => {
          // console.log(data.json());
          let tags = data.json() || {};
          if (tags.toptags && tags.toptags.tag) {
            // this.artist.tags = tags.toptags.tag.splice(10);
            this.artist = Object.assign({}, this.artist, {tags: tags.toptags.tag.splice(10)});
            console.log(this.artist);
          }
          // console.log('last fm tags', tags);
      })
      .subscribe();

    // Load artist from spotify
    this.spotify.searchArtist(artistName)
      .switchMap((artist) => {
        this.artist = Object.assign({}, this.artist, artist.artists.items[0] || {});
        // console.log(this.artist);

        // Load artist's albums from spotify
        return this.spotify.getArtistAlbums(artist.artists.items[0].id);
      })
      .subscribe((albums: any) => {
        this.artist = Object.assign({}, this.artist, {albums: albums.items || {}});
        // console.log(this.artist);
      });
  }

  getTracksByAlbumId(albumId: string) {
    this.tracks = [];
    this.spotify.getTracksByAlbumId(albumId)
      .subscribe((tracks: any) => {
        this.tracks = tracks;
        console.log(this.tracks);
      });
  }
}
