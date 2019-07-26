import { Component, OnInit } from '@angular/core';

import { QuestionaryService } from '.././questionary.service';

@Component({
  selector: 'app-quest02',
  templateUrl: './quest02.component.html',
  styleUrls: ['./quest02.component.css']
})
export class Quest02Component implements OnInit {

  constructor(private questionaryService: QuestionaryService) { }

  ngOnInit() { }

  responder(questao, posicao, resposta: number) {
    this.questionaryService.save(questao, posicao, resposta);
  }

}