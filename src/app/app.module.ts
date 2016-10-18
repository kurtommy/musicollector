import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import './rxjs-extensions';

import { MaterialModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';

import { MusicollectorRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistAlbumsComponent } from './artist-albums';
import { AlbumTracksComponent } from './album-tracks';
import { AddEditArtistComponent } from './add-edit-artist';
import { BreadcrumbsComponent } from './breadcrumbs';
import { ListNavigatorComponent } from './list-navigator/list-navigator.component';

import { ArtistService } from './services/artist.service';
import { SpotifyService } from './services/spotify.service';
import { UtilsService } from './services/utils.service';
import { StorageService } from './services';

export const firebaseConfig = {
  apiKey: 'AIzaSyB4qLqRQtpDnZIgp9AXN1VhL5XDt3QPivg',
  authDomain: 'musicollector-4e6ae.firebaseapp.com',
  databaseURL: 'https://musicollector-4e6ae.firebaseio.com',
  storageBucket: 'musicollector-4e6ae.appspot.com',
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MusicollectorRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistAlbumsComponent,
    AlbumTracksComponent,
    BreadcrumbsComponent,
    AddEditArtistComponent,
    ListNavigatorComponent
  ],
  providers: [
    ArtistService,
    SpotifyService,
    UtilsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
