import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import 'rxjs/add/operator/map';

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  done: boolean = false;

  constructor(
    private router: Router) { }

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
      
      this.router.navigate(['/identify', { mat: matricula }]);
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
        'realizacao': realizacao
      })
      console.log('auth.service.ts autenticated', this.done);
      //Redireciona para a 'identify'
      //this.router.navigate(['/identify', { id: this.matricula }]);
      this.router.navigate(['/identify']);
    }
  }
}