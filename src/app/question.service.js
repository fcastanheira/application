"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by NB20067 on 27-02-2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var QuestionService = (function () {
    //private questionsUrl = `https://private-anon-14a579e829-blissrecruitmentapi.apiary-mock.com/questions`;
    //private questionsUrl = 'https://jsonplaceholder.typicode.com/users';
    function QuestionService(http) {
        this.http = http;
        this.questionsUrl = 'api/questions'; //URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    QuestionService.prototype.getQuestions = function () {
        //return Promise.resolve(Questions);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var limit = 10;
        var offset = 10;
        // const url = `${this.questionsUrl}?${limit}&${offset}`;
        var url = "" + this.questionsUrl;
        //return this.http.get(this.questionsUrl)
        return this.http.get(url, {
            headers: headers
        })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //for demo purposes only
        return Promise.reject(error.message || error);
    };
    QuestionService.prototype.getQuestion = function (id) {
        //  return this.getQuestions()
        //   .then(questions => questions.find(question => question.id === id));
        var url = this.questionsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    QuestionService.prototype.update = function (question) {
        var url = this.questionsUrl + "/" + question.id;
        return this.http
            .put(url, JSON.stringify(question), { headers: this.headers })
            .toPromise()
            .then(function () { return question; })
            .catch(this.handleError);
    };
    QuestionService.prototype.create = function (name) {
        return this.http
            .post(this.questionsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    QuestionService.prototype.delete = function (id) {
        var url = this.questionsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable()
], QuestionService);
exports.QuestionService = QuestionService;
