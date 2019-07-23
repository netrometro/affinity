import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionaryComponent } from './questionary.component';
import { Quest01Component } from './quest01/quest01.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    QuestionaryComponent, 
    Quest01Component
  ],
  exports: [
    Quest01Component
  ]
})
export class QuestionaryModule { }