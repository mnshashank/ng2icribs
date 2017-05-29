import { Component, OnInit , ViewChild} from '@angular/core';
import {CribsService} from '../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
@ViewChild('newCribForm') newCribForm;
propertyTypes: Array<string> = ['House','Condo','Duplex'];
  constructor(private cribsService: CribsService) { }

  ngOnInit() {
  }
onCribSubmit(data): void {
  this.cribsService.addCrib(data);
  this.newCribForm.reset();
}
}