import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  coinwallet: string[] = [];
  selectedwallet: string = this.coinwallet[0];

  respostas: number[][] = [];

  myModel: any;

  constructor() {
    var points = new Array(100);
    for (var i = 0; i < 44; i++) {
      this.coinwallet[i] = i + 1;
    }
    this.selectedwallet = 1;
  }

  ngOnInit() { }

  onBlurMethod() {
    console.log(this.myModel);
  }
}