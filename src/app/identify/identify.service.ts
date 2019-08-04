import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Person } from '.././model/person.interface';

@Injectable()
export class IdentifyService {

  constructor(private afs: AngularFirestore) { }

  update(person: Person) {
    let personDoc: AngularFirestoreDocument<Person> = this.afs.doc<Person>('person/' + person.id);
    personDoc.update(person);
  }

}