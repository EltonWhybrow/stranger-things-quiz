import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailsComponent } from './characters/characters-details.component';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Welcome - Stranger Things Quiz' },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'characters', component: CharactersComponent, title: 'Characters - Stranger Things Quiz' },
  {
    path: 'character-details/:id', component: CharactersDetailsComponent,
    title: 'Character details - Stranger Things Quiz'
  },
  { path: 'quiz', component: QuizComponent, title: 'Quiz - Stranger Things Quiz' },
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
