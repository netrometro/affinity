import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest40',
  templateUrl: './quest40.component.html',
  styleUrls: ['./quest40.component.css']
})
export class Quest40Component implements OnInit {  // <= numero

  upAnswer: number;
  downAnswer: number;

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() {
    let a = this.questionaryService.getAnswers(40); // <= numero
    this.upAnswer = a[0];
    this.downAnswer = a[1];
  }

  responder(posicao: number, resposta: number) {
    if (resposta < 0) { resposta = 0 };
    if (resposta > 6) { resposta = 6 }; 
    this.questionaryService.save(40, posicao, resposta);  // <= numero
  }
}