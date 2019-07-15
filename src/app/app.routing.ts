import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryComponent } from './questionary/questionary.component';

const APP_ROUTES: Routes = [
   { path: '', component: HomeComponent },
   { path: 'identify', component: IdentifyComponent },
   { path: 'tutorial', component: TutorialComponent },
   { path: 'questionary', component: QuestionaryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);