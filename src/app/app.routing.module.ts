import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryComponent } from './questionary/questionary.component';
import { EndingComponent } from './ending/ending.component';

import { AuthGuard } from './guards/auth.guard';

const AppRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'identify', component: IdentifyComponent },
   { path: 'tutorial', component: TutorialComponent},
   { path: 'questionary', component: QuestionaryComponent },
   { path: 'ending', component: EndingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}