import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '.././model/user.model';

@Injectable()
export class AuthService {

  formData: User;

  autenticated: boolean = false;

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    private router: Router,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.usersCollection = this.afs.collection('individuos');
    this.users = this.usersCollection.valueChanges();
    console.log(this.users);
  }
/*
  constructor(
    private router: Router,
    private store: AngularFirestore) { }
*/
  login(matricula: string) {
    //let d = new Date();
    //this.afs.collection('individuos').doc(matricula).set( { 'date': d.toUTCString() });
    let query = this.afs.collection('individuos').ref.where('matricula', '==', '1234567890');
    console.log(query);
    //this.afs.collection('individuos', ref.);

    //let data = JSON.parse('{ "matricula": "' + matricula + '" }');
    //this.store.collection('individuos').add(data);

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