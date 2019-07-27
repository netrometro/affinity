import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {

  autenticated: boolean = false;

  constructor(
    private router: Router,
    private store: AngularFirestore) { }

  login(matricula: string) {

    //Busca no banco a matricula
    //Se não existir
    //Usuário novo é cadastrado
    //Redireciona para a 'identify'
    //Se existir
    //Não pode fazer de novo, redireciona para 'ending'

    if (matricula != '1234567890') {
      let obj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
      this.store.collection('individuos').add(obj);

      this.autenticated = true;
      console.log('Usuário novo.');
      this.router.navigate(['/identify']);
    } else {

      this.autenticated = false;
      console.log('Usuário já cadastrado.');
      this.router.navigate(['/ending']);
    }
  }

  userAutenticated() {
    return this.autenticated;
  }

}