import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';

import { User } from './model/user.interface';

@Injectable()
export class AuthService {

  done: boolean = false;

  formData: User;

  matricula: string;
  users: AngularFirestoreCollection<User>;

  //usersCollection: AngularFirestoreCollection<User>;
  //users: Observable<User[]>;

  constructor(
    private router: Router,
    private afs: AngularFirestore) { }

  ngOnInit() {
    //this.usersCollection = this.afs.collection('individuos');
    //this.users = this.usersCollection.valueChanges();
    //console.log(this.users);
    this.done = false;
  }

  login(matricula: string) {
    this.matricula = matricula;

    //Busca no banco a matricula
    let ref = this.afs.collection('individuos').ref;
    let query = ref.where('matricula', '==', matricula);
    this.users = this.afs.collection('individuos', ref => query);
    this.users.valueChanges().pipe(first()).subscribe((data) => {
      //console.log(data[0]);
      console.log('Length: ', data.length);
      if (data.length > 0) {
        this.done = true;
      }
      this.algo();
    });

    /*
    t.valueChanges().forEach(data => {
      if (data.length > 0) {
        this.done = true;
        console.log('Já realizou: ', data);
        console.log('auth.service.ts autenticated', this.done);
        //Redireciona para a 'ending'
        this.router.navigate(['/ending']);

      } else {
        //Usuário novo é cadastrado
        let realizacao = new Date().toUTCString();
        
        this.afs.collection('individuos').add({
          'realizacao': realizacao,
          'matricula': matricula
        })
        console.log('Cadastrado: ', matricula);
        console.log('auth.service.ts autenticated', this.done);
        //Redireciona para a 'identify'
        this.router.navigate(['/identify']);
      }
    });
    */
  }

  algo() {
    
    if (this.done) {
      console.log('Já realizou: ');
      console.log('auth.service.ts autenticated', this.done);
      //Redireciona para a 'ending'
      this.router.navigate(['/ending']);
    } else {
      //Usuário novo é cadastrado
      let realizacao = new Date().toUTCString();
      
      this.afs.collection('individuos').add({
        'realizacao': realizacao,
        'matricula': this.matricula
      })
      console.log('Cadastrado: ', this.matricula);
      console.log('auth.service.ts autenticated', this.done);
      //Redireciona para a 'identify'
      this.router.navigate(['/identify']);
    }
  }

  isDone() {
    return this.done;
  }
}