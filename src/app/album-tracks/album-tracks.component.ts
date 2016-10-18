import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from '../services/artist.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'album-tracks',
  templateUrl: 'album-tracks.component.html',
  styleUrls: ['album-tracks.component.css']
})
export class AlbumTracksComponent implements OnInit {
  private artistId: string;
  private artistName: string;
  private albumId: string;
  private albumName: string;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private utilsService: UtilsService) {}

  ngOnInit() {
    this.artistId = this.route.snapshot.params['artistId'];
    this.artistName = this.route.snapshot.params['artistName'];
    this.albumId = this.route.snapshot.params['albumId'];
    this.albumName = this.route.snapshot.params['albumName'];
    console.log(this.route.snapshot.params);

    console.log(this.route.snapshot);

    this.artistService.getTracksByAlbumId(this.albumId);

    console.log(this.artistService.album);
  }

  openMediaLink(mediaId, mediaType, media) {
    const mediaLink = this.utilsService.getMediaLink(mediaId, mediaType, media).toString();
    console.log(mediaLink);
    window.open(mediaLink, '_self');
  }
}
