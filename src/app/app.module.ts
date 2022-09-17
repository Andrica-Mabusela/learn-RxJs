import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningObservablesComponent } from './components/learning-observables/learning-observables.component';
import { LearnOperatorsComponent } from './components/learn-operators/learn-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningObservablesComponent,
    LearnOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
