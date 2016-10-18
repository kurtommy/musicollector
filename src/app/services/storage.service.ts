import { Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class StorageService {
  items: FirebaseListObservable<any[]>;
  db: any;
  artists;

  constructor(private af: AngularFire) {
    this.db = this.af.database.object('/artists');
     this.artists = new ReplaySubject(1);
  }

  getArtists() {
    // this.db.set({'1': {name: 'a', s: 'b'}, '2': {name: 'b', s: 'a'}});
    // this.af.database.object('/artists/123').set({'3': {name: '3', s: '3'}});
    // this.db.set({3: {id: 3, name: 'name'}});
    // {query: {orderByChild: 's', equalTo: 'a'}}
    this.af.database.list('/artists', {query: {orderByChild: 'name'}}).subscribe(data => {
      console.log(data);
      this.artists.next(data);
    });
  }

  searchArtistByName(query) {
    this.af.database.list('/artists', {query: {orderByChild: 'name', equalTo: query}}).subscribe(data => {
      console.log(data);
      this.artists.next(data);
    });
  }

  createArtist(artist) {
    this.af.database.object(`/artists/${artist.id}`).set(artist);
  }

  readArtist(artistId) {

  }

  updateArtist(artists) {

  }

  deleteArtist(artist) {

  }

}
