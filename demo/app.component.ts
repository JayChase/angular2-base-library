import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [],
  directives: [ ]
})

export class AppComponent implements OnInit {
  title: string = 'Demo app';

  constructor() {

  }

  ngOnInit() {
   
  }
}
