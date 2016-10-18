import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})
export class ListNavigatorComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
       console.log(params);
       console.log(this.route.snapshot.params);
      //  params.params.subscribe(asd => console.log(asd))
    });
  }
}
