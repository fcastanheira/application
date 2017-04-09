import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AppComponent }        from './app.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionsComponent }     from './questions.component';
import { QuestionService }         from './question.service';
import {QuestionSearchComponent} from './question-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    QuestionsComponent,
    QuestionSearchComponent
  ],
  providers: [QuestionService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
