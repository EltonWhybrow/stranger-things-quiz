import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersDetailsComponent } from './characters/characters-details.component';
import { CharactersComponent } from './characters/characters.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { ConfirmDeactivateGuard } from './shared/confirm-deactivate-guard.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Welcome - Stranger Things Quiz' },
  { path: 'characters', component: CharactersComponent, title: 'Characters - Stranger Things Quiz' },
  {
    path: 'character-details/:id', component: CharactersDetailsComponent,
    title: 'Character details - Stranger Things Quiz'
  },
  { path: 'quiz', component: QuizComponent, canDeactivate: [ConfirmDeactivateGuard], title: 'Quiz - Stranger Things Quiz' },
  { path: 'about', component: AboutComponent, title: 'About - Stranger Things Quiz' },
  { path: '**', component: PageNotFoundComponent, title: 'Page not found - Stranger Things Quiz' },
  { path: '', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  CharactersComponent,
  CharactersDetailsComponent,
  QuizComponent
]
