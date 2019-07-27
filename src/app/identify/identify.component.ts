import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
    private identifyService: IdentifyService
  ) { } 

  ngOnInit() { }

  onFormSubmit(form: NgForm) {
    if( form.invalid ){
      return;	
    }

    this.identifyService.save(this.user);
    this.router.navigate(['/tutorial']);
  }
}