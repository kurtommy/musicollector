import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistAlbumsComponent } from './artist-albums';
import { AlbumTracksComponent } from './album-tracks';
import { AddEditArtistComponent } from './add-edit-artist';
import { ListNavigatorComponent } from './list-navigator/list-navigator.component';


const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'artists', component: ListNavigatorComponent, children: [
    { path: '', component: ArtistListComponent, pathMatch: 'full' },
    { path: ':artistId/:artistName', component: ArtistAlbumsComponent, pathMatch: 'full' },
    { path: ':artistId/:artistName/album/:albumId/:albumNme', component: AlbumTracksComponent },
  ]},
  
  { path: 'add-artist', component: AddEditArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MusicollectorRoutingModule { }
