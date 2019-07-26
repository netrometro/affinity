import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest01',
  templateUrl: './quest01.component.html',
  styleUrls: ['./quest01.component.css']
})
export class Quest01Component implements OnInit {

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() { }

  responder(questao, posicao, resposta: number) {
    this.questionaryService.save(questao, posicao, resposta);
  }

}