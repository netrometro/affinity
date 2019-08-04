import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AuthService } from '.././auth.service';
import { Person } from '.././model/person.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matricula: string;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
      this.resetForm();

    this.matricula = '';
  }

  onSubmit(form: NgForm) {
    // Busca no banco a matricula
    let collection: AngularFirestoreCollection = this.afs.collection('persons', 
      ref => ref.limit(1).where('matricula', '==', this.matricula));
    let results = collection.valueChanges();

    // Verifica se achou
    results.forEach(element => {
    if (element.length < 1) {
      // Senão, novato. (done == false)
      this.authService.done = false;
      this.router.navigate(['/identify', { mat: this.matricula }]);
    }
    });
  } 
}

/*
if (element.length > 0) {
      // Se houver a matricula, significa que já concluiu a pesquisa.
      console.log('Done: ', this.authService.done, ' Matricula: ', this.matricula);
      // Redireciona para a página de agradecimento.
      this.router.navigate(['/ending']);
    } else 
*/