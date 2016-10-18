import { Injectable } from '@angular/core';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';

// import { Artist } from './artist';

@Injectable()
export class DbService {
  artists = [
    {
      id: 1,
      name: 'Nirvana',
      img: 'http://www.rvdrums.com/rvdrumsblog/wp-content/uploads/2014/04/nirvana.jpg',
    },
    {
      id: 2,
      name: 'Muse',
      img: 'http://www.eventinbus.com/blog/wp-content/uploads/2016/03/00032993.Muse_.jpg'
    },
    {
      id: 3,
      name: 'Korn',
      img: 'https://i.ytimg.com/vi/kyOcIbRRkiw/maxresdefault.jpg'
    }
  ];

  // items: FirebaseListObservable<any[]>;

  // constructor(af: AngularFire) {
  //   this.items = af.database.list('items');
  // }
  constructor() {}

  createArtist(artist) {

  }

  readArtist(artistId) {

  }

  updateArtist(artists) {

  }

  deleteArtist(artist) {

  }
}
