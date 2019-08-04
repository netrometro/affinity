import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '.././auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matricula: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
      this.resetForm();

    this.matricula = '';
  }

  onSubmit(form: NgForm) {
    this.authService.login(this.matricula);
  } 
}