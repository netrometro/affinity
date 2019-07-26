import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryComponent } from './questionary/questionary.component';
import { EndingComponent } from './ending/ending.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'identify', component: IdentifyComponent, canActivate: [AuthGuard] },
   { path: 'tutorial', component: TutorialComponent, canActivate: [AuthGuard] },
   { path: 'questionary', component: QuestionaryComponent, canActivate: [AuthGuard] },
   { path: 'ending', component: EndingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}