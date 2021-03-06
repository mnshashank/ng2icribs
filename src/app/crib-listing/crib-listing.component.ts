import { Component, OnInit } from '@angular/core';
import {CribsService} from './../services/cribs.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	cribs: Array<any>;
  error: string;

  constructor(private cribsService: CribsService) { }

  ngOnInit() {
this.cribsService.getAllCribs().subscribe(
  data => this.cribs = data,
  error => this.error = error.statusText
);
this.cribsService.newCribSubject.subscribe(data => this.cribs.push(data));

  }

}
