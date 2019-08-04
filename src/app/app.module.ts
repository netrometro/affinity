import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '.././environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryModule } from './questionary/questionary.module';
import { EndingComponent } from './ending/ending.component';

import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { IdentifyService } from './identify/identify.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,     
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule, 
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
