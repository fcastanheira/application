"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsComponent = (function () {
    function QuestionsComponent(router, QuestionService) {
        this.router = router;
        this.QuestionService = QuestionService;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.QuestionService.getQuestions().then(function (questions) { return _this.questions = questions; });
    };
    QuestionsComponent.prototype.onSelect = function (question) {
        this.selectedQuestion = question;
        this.gotoDetail();
    };
    QuestionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedQuestion.id]);
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-questions',
        templateUrl: 'questions.component.html',
        styleUrls: ['questions.component.css']
    })
], QuestionsComponent);
exports.QuestionsComponent = QuestionsComponent;
