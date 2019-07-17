import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionary',
  //templateUrl: './questionary.component.html',
  template: ´ ´,
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  coinwallet: string[] = [];
  selectedwallet = this.coinwallet[0];

  constructor() {
    var points = new Array(100);
    for (var i = 0; i < 44; i++) {
      this.coinwallet[i] = i + 1;
    }
  }

  ngOnInit() {
  }

}