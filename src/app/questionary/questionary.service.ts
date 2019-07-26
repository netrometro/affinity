import { Injectable } from '@angular/core';

@Injectable()
export class QuestionaryService {

  respostas: any[];

  constructor() {
    this.respostas = [];
    for(let i=0; i < 44; i++) {
      let a = []
      this.respostas[i] = a;
    }
  }

  save(questao, posicao, resposta: number) {
    this.respostas[questao-1][posicao-1] = resposta;
    console.log(this.respostas);
  }

}