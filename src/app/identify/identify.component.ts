import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Person } from '.././model/person.interface';
import { IdentifyService } from './identify.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  id: string;
  person: Person;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private identifyService: IdentifyService) {

    this.person = {
      id: '',
      matricula: '',
      realizacao: '',
      programador: '',
      idade: null,
      genero: '',
      formacao: ''
    }
  }

  ngOnInit() {
    // Recebe o id
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log('Identify id: ', this.id);
    // Recebe o objeto person
    //this.person = <Person> this.route.snapshot.queryParamMap.get('person');
    //let t = this.route.snapshot.paramMap.get('queryParams');
    //console.log(JSON.stringify(t));
    //console.log('Identify recebendo person: ', this.person);

  }

  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }

    //this.person.id = this.id;
    
    this.route.queryParams
      .subscribe(params => {
        this.person.id = params.id;
        this.person.matricula = params.matricula; 
        this.person.realizacao = params.realizacao;
    });

    console.log('Identify person:', this.person)
    this.identifyService.update(this.person);
    this.router.navigate(['/tutorial']);
  }
}