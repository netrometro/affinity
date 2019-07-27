import { Injectable } from '@angular/core';

import { User } from '.././model/user.model';

@Injectable()
export class IdentifyService {

  constructor() { }

  save(user: User) {
    console.log(user);
  }

}