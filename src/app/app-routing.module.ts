import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnOperatorsComponent } from './components/learn-operators/learn-operators.component';
import { LearningObservablesComponent } from './components/learning-observables/learning-observables.component';

const routes: Routes = [
  {path: "learning-observables", component: LearningObservablesComponent},
  {path: "learn-operators", component: LearnOperatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
