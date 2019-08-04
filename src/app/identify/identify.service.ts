import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Person } from '.././model/person.interface';

@Injectable()
export class IdentifyService {

  constructor(private afs: AngularFirestore) { }

  add(person: Person) {
    let personsCollection: AngularFirestoreCollection<Person> = this.afs.collection<Person>('persons');;
    personsCollection.doc(person.id).set(person);
  }

}