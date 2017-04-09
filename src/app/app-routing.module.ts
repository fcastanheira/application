/**
 * Created by Fábio on 28-02-2017.
 */
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent }      from './questions.component';
import { QuestionDetailComponent }  from './question-detail.component';


const routes: Routes = [
  {path:'', redirectTo: '/questions', pathMatch: 'full'},
  {path: 'detail/:id', component: QuestionDetailComponent},
  {path: 'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
