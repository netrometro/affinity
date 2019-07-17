import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryComponent } from './questionary/questionary.component';
import { QuestionaryDetailComponent } from './questionary-detail/questionary-detail.component';
import { EndingComponent } from './ending/ending.component';

const APP_ROUTES: Routes = [
   { path: '', component: HomeComponent },
   { path: 'identify', component: IdentifyComponent },
   { path: 'tutorial', component: TutorialComponent },
   { path: 'questionary', component: QuestionaryComponent },
   { path: 'questionary/:id', component: QuestionaryDetailComponent },
   { path: 'ending', component: EndingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);