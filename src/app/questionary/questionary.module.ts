import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionaryComponent } from './questionary.component';
import { Quest01Component } from './quest01/quest01.component';
import { Quest02Component } from './quest02/quest02.component';
import { Quest03Component } from './quest03/quest03.component';
import { Quest04Component } from './quest04/quest04.component';
import { Quest05Component } from './quest05/quest05.component';
import { Quest06Component } from './quest06/quest06.component';
import { Quest07Component } from './quest07/quest07.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    QuestionaryComponent, 
    Quest01Component, Quest02Component, Quest03Component, Quest04Component, Quest05Component, Quest06Component, Quest07Component
  ],
  exports: [
    Quest01Component
  ]
})
export class QuestionaryModule { }