import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../../dto/application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  public properties: Application;

  @Input("value")
  public set value(properties: Application) {
    this.properties = properties;
  };

  constructor() { }

  ngOnInit() {
    
  }

}
