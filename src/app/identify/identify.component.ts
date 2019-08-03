import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { User } from '.././model/user.model';
import { IdentifyService } from './identify.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private identifyService: IdentifyService
  ) { }

  ngOnInit() { 
    let id = this.route.snapshot.paramMap.get('id');
    console.log('Identify id: ', id);
  }

  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }

    // Recebe o usuário 
    // insere as informações dele

    this.identifyService.save(this.user);
    this.router.navigate(['/tutorial']);
  }
}