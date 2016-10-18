import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService, Artist } from '../services';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: any;

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit() {
    this.artists = this.artistService.getArtists();
    // this.artists.subscribe(asd => console.log(asd));
  }

  goToArtist(artist) {
    this.router.navigate(['/artists', artist.id, artist.name]);
  }
}
