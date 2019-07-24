import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class AuthService {

  autenticated: boolean = false;

  constructor() { }

  inserir(user: User) {
    //Busca no banco a matricula
    //Se não existir
    //Usuário novo é cadastrado
    //Se existir
    //Não pode fazer de novo
    if (user.matricula === '1234567890') {
      this.autenticated = true;
      
      console.log(user);
    }
  }

  userAutenticated() {
    return this.autenticated;
  }

}