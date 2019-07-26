import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { EndingComponent } from './ending/ending.component';

import { QuestionaryModule } from './questionary/questionary.module';

import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './home/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { IdentifyService } from './identify/identify.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    QuestionaryModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    IdentifyComponent, 
    TutorialComponent, 
    EndingComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    AuthService,
    AuthGuard,
    IdentifyService
  ]
})

export class AppModule { }
