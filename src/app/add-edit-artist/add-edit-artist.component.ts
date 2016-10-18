import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'add-edit-artist',
  templateUrl: 'add-edit-artist.component.html',
  styleUrls: ['add-edit-artist.component.css']
})
export class AddEditArtistComponent implements OnInit {

  artist = { name: '' };

  constructor(
    private router: Router,
    private artistService: ArtistService) {}

  ngOnInit() {
  }

  onSubmit() {
    // this.artistService.artists.push({
    //   id: Math.random(),
    //   name: this.artist.name
    // });
    this.artistService.createArtist(this.artist);
    this.artist.name = '';
    this.router.navigate(['/']);
  }
}
