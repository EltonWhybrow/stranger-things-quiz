import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MaterialModule } from './core/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BgColorDirective } from './shared/bg-color.directive';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AboutComponent } from './about/about.component';
import { MyDialogComponent } from './shared/my-dialog/my-dialog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDeactivateGuard } from './shared/confirm-deactivate-guard.guard';
import { QuizDialogComponent } from './shared/quiz-dialog/quiz-dialog.component';
import { GameComponent } from './game/game.component';
import { GameGuard } from './shared/game.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    BgColorDirective,
    SpinnerComponent,
    AboutComponent,
    MyDialogComponent,
    QuizDialogComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ConfirmDeactivateGuard, GameGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
