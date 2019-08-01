import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../home/auth.service';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  coinwallet: string[] = [];
  selectedwallet: string = this.coinwallet[0];
  time: number = 0;
  restante: number = 25;
  progresso: number = 0;

  myModel: any;

  constructor( 
    private router: Router,
    private authService: AuthService) {

    var points = new Array(100);
    for (var i = 0; i < 44; i++) {
      this.coinwallet[i] = i + 1;
    }
    this.selectedwallet = 1;

    var t = window.setInterval(() => {
      this.time += 1;
      this.restante = 25 - Math.floor(this.time / 60);
      this.progresso = this.time / 60 * 4;
    }, 1000);
    
    var tt = window.setTimeout(() => {
      this.router.navigate(['ending']);
    }, 1500000);
  }

  ngOnInit() {
    this.authService.autenticated = false;
  }
}