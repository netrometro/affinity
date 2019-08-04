import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Person } from '.././model/person.interface';
import { IdentifyService } from './identify.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  person: Person;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private identifyService: IdentifyService,
    private afs: AngularFirestore) {
    
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
    // Cria uma id firebase
    this.person.id = this.afs.createId();
    this.person.matricula = this.route.snapshot.paramMap.get('mat');
    this.person.realizacao = new Date().toUTCString();

    console.log('Identify person inicial: ', this.person);
  }

  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }

    console.log('Identify person final:', this.person)
    this.identifyService.add(this.person);
    this.router.navigate(['/tutorial', { uid: this.person.id }]);
  }
}