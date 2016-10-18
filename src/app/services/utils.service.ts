import {Injectable} from '@angular/core';
// import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';

@Injectable()
export class UtilsService {

  mediaLinks = {
    spotify: {
      id: 'spotify',
      name: 'Spotify',
      url: 'https://spotyfy.com'
    },
    youtube: {
      id: 'youtube',
      name: 'Youtube',
      url: 'https://youtube.com/results?watch?v=youtube&search_query='
    },
    vevo: {
      id: 'vevo',
      name: 'Vevo',
      url: 'http://www.vevo.com/search?q='
    },
    wikipedia: {
      id: 'wikipedia',
      name: 'Wikipedia',
      url: 'https://wikipedia.com'
    }
  };

  constructor() {}

  getMediaLink(mediaId: string, mediaType: string, media: any) {
    // let mediaLink = '';
    switch (mediaId) {
      case 'spotify':
        // return this.trustUrl(media.uri);
        return media.uri;
      // case 'youtube':
      //   mediaLink = `${this.mediaLinks[mediaId].url}${this.artistService.artist.name}`;
      //   if (mediaType === 'album') {
      //     mediaLink += ` ${media.name}`;
      //   }
      //   return this.trustUrl(mediaLink);
      // case 'vevo':
      //   mediaLink = `${this.mediaLinks[mediaId].url}${this.artistService.artist.name}`;
      //   if (mediaType === 'album') {
      //     mediaLink += ` ${media.name}`;
      //   }
      //   return this.trustUrl(mediaLink);
    }
  }

  trustUrl(url: string) {
    if (url) {
      return url; // this.sanitizer.bypassSecurityTrustUrl(url);
    }
    return '';
  }
}
