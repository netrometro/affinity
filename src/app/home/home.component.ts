import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matricula: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.matricula);
  }
}