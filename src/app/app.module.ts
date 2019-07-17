import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
//import { QuestionaryComponent } from './questionary/questionary.component';
import { EndingComponent } from './ending/ending.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    routing
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    IdentifyComponent, 
    TutorialComponent, 
    //QuestionaryComponent, 
    EndingComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: []
})

export class AppModule { }
