"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var question_search_service_1 = require("./question-search.service");
var QuestionSearchComponent = (function () {
    function QuestionSearchComponent(questionSearchService, router) {
        this.questionSearchService = questionSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    QuestionSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    QuestionSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questions = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.questionSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    QuestionSearchComponent.prototype.gotoDetail = function (question) {
        var link = ['/detail', question.id];
        this.router.navigate(link);
    };
    return QuestionSearchComponent;
}());
QuestionSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'question-search',
        templateUrl: 'question-search.component.html',
        styleUrls: ['question-search.component.css'],
        providers: [question_search_service_1.QuestionSearchService]
    })
], QuestionSearchComponent);
exports.QuestionSearchComponent = QuestionSearchComponent;
