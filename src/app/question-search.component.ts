import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { QuestionSearchService } from './question-search.service';
import { Question } from './question';
@Component({
  moduleId: module.id,
  selector: 'question-search',
  templateUrl: 'question-search.component.html',
  styleUrls: [ 'question-search.component.css' ],
  providers: [QuestionSearchService]
})
export class QuestionSearchComponent implements OnInit {
  questions: Observable<Question[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private questionSearchService: QuestionSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.questions = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.questionSearchService.search(term)
        : Observable.of<Question[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Question[]>([]);
      });
  }
  gotoDetail(question: Question): void {
    let link = ['/detail', question.id];
    this.router.navigate(link);
  }
}
