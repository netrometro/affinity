import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  autenticated: boolean = false;

  constructor() { }

  login(matricula: string) {

    //Busca no banco a matricula
    //Se não existir
    //Usuário novo é cadastrado
    //Redireciona para a 'identify'
    //Se existir
    //Não pode fazer de novo, redireciona para 'ending'

    if (matricula != '1234567890') {
      this.autenticated = true;
      
      console.log(matricula);

      // redireciona 'identify'
    }
    this.autenticated = false;
    // redireciona 'ending'
  }

  userAutenticated() {
    return this.autenticated;
  }

}