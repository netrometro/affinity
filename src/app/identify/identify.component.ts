import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private authService: AuthService) { } 

  ngOnInit() { }

  cadastrar() {
    this.authService.inserir(this.user);
  }


  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }

    
  }

}