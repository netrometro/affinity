import { Component } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest01',
  templateUrl: './quest01.component.html',
  styleUrls: ['./quest01.component.css']
})
export class Quest01Component {

  //TODO: Atributo é apagado quando passa para a próxima questão.
  upAnswer: number;
  downAnswer: number;

  constructor(private questionaryService: QuestionaryService) { }

  responder(posicao: number, resposta: number) {
    console.log(this.upAnswer);
    if (resposta < 0) { resposta = 0 };
    if (resposta > 6) { resposta = 6 }; 
    this.questionaryService.save(1, posicao, resposta);
  }

}