import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest41',
  templateUrl: './quest41.component.html',
  styleUrls: ['./quest41.component.css']
})
export class Quest41Component implements OnInit {  // <= numero

  upAnswer: number;
  downAnswer: number;

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() {
    let a = this.questionaryService.getAnswers(41); // <= numero
    this.upAnswer = a[0];
    this.downAnswer = a[1];
  }

  responder(posicao: number, resposta: number) {
    if (resposta < 0) { resposta = 0 };
    if (resposta > 6) { resposta = 6 }; 
    this.questionaryService.save(41, posicao, resposta);  // <= numero
  }
}