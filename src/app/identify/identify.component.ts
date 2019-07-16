import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  matricula: number;
  experiencia: string;

  constructor() { }

  ngOnInit() { }

  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }
    
    this.matricula = form.controls['mat'].value;
    this.experiencia = form.controls['xp'].value;

    console.log("Matricula: " + this.matricula);
    console.log("Experiência: " + this.experiencia);
  }
}