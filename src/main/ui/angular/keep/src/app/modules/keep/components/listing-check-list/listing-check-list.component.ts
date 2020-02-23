import { Component, OnInit, Input } from '@angular/core';
import { CheckList } from '../../dto/check-list';

@Component({
  selector: 'app-listing-check-list',
  templateUrl: './listing-check-list.component.html',
  styleUrls: ['./listing-check-list.component.css']
})
export class ListingCheckListComponent implements OnInit {

  public value: CheckList;

  @Input("note")
  public set note(value: CheckList){
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
