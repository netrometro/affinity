import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Answer } from '.././model/answer.interface';

@Injectable()
export class QuestionaryService {

  uids: string[] = [];
  //respostas: any[];

  constructor(private afs: AngularFirestore) {
    for(let i=0; i < 44; i++) {
      this.uids[i] = null;
    }
    /*
    this.respostas = [];
    for(let i=0; i < 44; i++) {
      let a = []
      this.respostas[i] = a;
    }
    */
  }

  save(questao, posicao, resposta: number) {
    //this.respostas[questao-1][posicao-1] = resposta;
    //console.log(this.respostas);

    // Verifica se a questao tem resposta
    if (this.uids[questao-1] == null) {
      console.log('nada!');

      let answer: Answer = {
        person: '',
        questNumber: questao,
        upAnswer: posicao,
        downAnswer: resposta
      }

      //Salva 
    } else {
      console.log('tem!');

      // pega o que tem

      // atualiza
    }



    //let personsCollection: AngularFirestoreCollection<Person> = this.afs.collection<Person>('persons');;
    //personsCollection.doc(person.id).set(person);
  }

}