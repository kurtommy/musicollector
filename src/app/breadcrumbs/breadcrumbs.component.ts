import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { ArtistService } from '../services';

@Component({
  selector: 'breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
   routeParams: any;
   searchForm: FormGroup;
   query: FormControl;

  constructor(private route: ActivatedRoute, private builder: FormBuilder, private artistService: ArtistService) {
  }

  ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //    console.log(params);
  //    this.routeParams = params;
  //  });
  this.query = new FormControl('', []);
    this.searchForm = this.builder.group({
      query: this.query
    });

  this.query.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(query => {
        console.log(query);
        this.artistService.searchArtistByName(query);
      });
  }
}
