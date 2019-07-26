import { Injectable } from '@angular/core';

@Injectable()
export class QuestionaryService {

  respostas: number[][] = new Array();

  constructor() { }

  save(questao, posicao, resposta: number) {
    this.respostas[questao][posicao] = resposta;
    console.log(this.respostas);
  }

}