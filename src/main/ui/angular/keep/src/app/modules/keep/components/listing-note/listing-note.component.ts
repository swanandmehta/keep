import { Component, OnInit, Input } from '@angular/core';
import { Notepad } from '../../dto/notepad';

@Component({
  selector: 'app-listing-note',
  templateUrl: './listing-note.component.html',
  styleUrls: ['./listing-note.component.css']
})
export class ListingNoteComponent implements OnInit {

  public value: Notepad;

  @Input("note")
  private set note(value: Notepad){
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
