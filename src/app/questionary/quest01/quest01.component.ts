import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest01',
  templateUrl: './quest01.component.html',
  styleUrls: ['./quest01.component.css']
})
export class Quest01Component implements OnInit {

  //TODO: Atributo é apagado quando passa para a próxima questão.
  answer: any[] = [];

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() { }

  responder(questao: number, posicao: number, resposta: number) {
    this.answer[posicao-1] = resposta;
    console.log('Questao 1: ', this.answer);
    this.questionaryService.save(questao, posicao, resposta);
  }

}