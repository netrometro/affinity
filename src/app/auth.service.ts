import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import 'rxjs/add/operator/map';

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Person } from './model/person.interface';

@Injectable()
export class AuthService {

  person: Person;

  done: boolean = false;

  users: AngularFirestoreCollection<Person>;

  emitter = new EventEmitter<String>();

  constructor(
    private router: Router,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  login(matricula: string) {
    // Busca no banco a matricula

    if (matricula == '000000000') {
      // Se houver a matricula, significa que já concluiu a pesquisa. (done == true)
      this.done = true;
      // Redireciona para a página de agradecimento.
      console.log('Done: ', this.done, ' Matricula: ', matricula);
      this.router.navigate(['/ending']);

    } else {
      // Senão, novato. (done == false)
      // Emite a matricula para o próximo componente.
      this.emitter.emit(matricula);
      console.log('AuthService emitter: ', matricula);

/*
      // Cria uma id firebase
      const id = this.afs.createId();
      // Constroi a person
      let person: Person = {
        id: id,
        matricula: matricula,
        realizacao: new Date().toUTCString(),
        programador: '',
        idade: 0,
        genero: '',
        formacao: '',
      };
      let personsCollection = this.afs.collection<Person>('persons');
      personsCollection.doc(id).set(person);
*/

      // Redireciona para o resto do formulário passando o id firebase
      //this.router.navigate(['/identify'], {queryParams: person});
      this.router.navigate(['/identify']);
    }


/*
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
      this.router.navigate(['/identify', { id: this.matricula }]);
    }
  }
}