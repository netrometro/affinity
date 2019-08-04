import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Answer } from '.././model/answer.interface';

@Injectable()
export class QuestionaryService {

  uid: string;
  answers: any[] = [];

  constructor(private afs: AngularFirestore) {
    for(let i=0; i < 44; i++) {
      let a: any = []
      a[0] = 0;
      a[1] = 0;
      this.answers[i] = a;
    }
  }

  getAnswers(question: number) {
    return this.answers[question-1];
  }

  setUID(uid: string) {
    this.uid = uid;
    //console.log('setUID: ', this.uid);
  }

  save(questao: number, posicao: number, resposta: number) {
    // Registra no array
    this.answers[questao-1][posicao-1] = resposta;
    //console.log('Respostas: ', this.answers);

    let answer: Answer = {
      upAnswer: this.answers[questao-1][0],
      downAnswer: this.answers[questao-1][1]
    }
    //console.log('Answer: ', answer);

    //Salva
    let answersCollection: AngularFirestoreCollection<Answer> = this.afs.collection<Answer>('answers');
    answersCollection.doc(this.uid).collection('questions').doc("" + questao).set(answer);
    //console.log('Salvo!');
  }

}