import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '.././model/user.model';

@Injectable()
export class AuthService {

  formData: User;

  autenticated: boolean = false;

  constructor(
    private router: Router,
    private store: AngularFirestore) { }

  login(matricula: string) {

    let data = JSON.parse('{ "matricula": "' + matricula + '" }');
    this.store.collection('individuos').add(data);

    //Busca no banco a matricula
    //Se não existir
    //Usuário novo é cadastrado
    //Redireciona para a 'identify'
    //Se existir
    //Não pode fazer de novo, redireciona para 'ending'
/*
    if (matricula != '1234567890') {
      let obj = JSON.parse('{ "matricula": "' + matricula + '" }');
      this.store.collection('individuos').add(obj);

      this.autenticated = true;
      console.log('Usuário novo.');
      this.router.navigate(['/identify']);
    } else {

      this.autenticated = false;
      console.log('Usuário já cadastrado.');
      this.router.navigate(['/ending']);
    }*/
  }

  userAutenticated() {
    return this.autenticated;
  }
}