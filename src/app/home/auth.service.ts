import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '.././model/user.interface';

@Injectable()
export class AuthService {

  autenticated: boolean = false;

  formData: User;

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    private router: Router,
    private afs: AngularFirestore) { }

  ngOnInit() {
    //this.usersCollection = this.afs.collection('individuos');
    //this.users = this.usersCollection.valueChanges();
    //console.log(this.users);
  }

  login(matricula: string) {
    
    //Busca no banco a matricula
    let ref = this.afs.collection('individuos').ref;
    let query = ref.where('matricula', '==', matricula);
    let t = this.afs.collection('individuos', ref => query);
    t.valueChanges().forEach(function (data) {
      if (data.length > 0) {
        this.autenticated = true;
        console.log(data);
        //Redireciona para a 'ending'
        this.router.navigate(['/ending']);

      } else {
        this.autenticated = false;
        //Usuário novo é cadastrado
        let realizacao = new Date().toUTCString();
        
        this.afs.collection('individuos').add({
          'realizacao': realizacao,
          'matricula': matricula
        })
        //Redireciona para a 'identify'
        this.router.navigate(['/identify']);
      }
    });
  }

  userAutenticated() {
    return this.autenticated;
  }
}