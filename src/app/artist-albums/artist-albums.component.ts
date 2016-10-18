import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { Artist } from '../interfaces/artist.interface';
import { ArtistService } from '../services/artist.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'artist-albums',
  templateUrl: 'artist-albums.component.html',
  styleUrls: ['artist-albums.component.css']
})
export class ArtistAlbumsComponent implements OnInit {
  private artistId: number;
  private artistName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService,
    private utilsService: UtilsService) {}

    ngOnInit() {
      this.artistId = this.route.snapshot.params['artistId'];
      this.artistName = this.route.snapshot.params['artistName'];

      console.log('artistId', this.artistId, 'artistName', this.artistName);

      this.artistService.loadArtistByName(this.artistName);
    }

    goToAlbumTracks(album) {
      this.artistService.album = album;
      this.router.navigate(['/artists', this.artistId, this.artistName, 'album', album.id, album.name]);
    }

    openMediaLink(mediaId, mediaType, media) {
      const mediaLink = this.utilsService.getMediaLink(mediaId, mediaType, media).toString();
      window.open(mediaLink, '_self');
    }
  }
