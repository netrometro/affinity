import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest42',
  templateUrl: './quest42.component.html',
  styleUrls: ['./quest42.component.css']
})
export class Quest42Component implements OnInit {  // <= numero

  upAnswer: number;
  downAnswer: number;

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() {
    let a = this.questionaryService.getAnswers(42); // <= numero
    this.upAnswer = a[0];
    this.downAnswer = a[1];
  }

  responder(posicao: number, resposta: number) {
    if (resposta < 0) { resposta = 0 };
    if (resposta > 6) { resposta = 6 }; 
    this.questionaryService.save(42, posicao, resposta);  // <= numero
  }
}