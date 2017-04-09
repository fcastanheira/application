/**
 * Created by NB20067 on 27-02-2017.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question } from './question';


@Injectable()
export class QuestionService {

  private questionsUrl = 'api/questions'; //URL to web api
  //private questionsUrl = `https://private-anon-14a579e829-blissrecruitmentapi.apiary-mock.com/questions`;

 //private questionsUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor (private http: Http){}



  getQuestions(): Promise<Question[]> {
    //return Promise.resolve(Questions);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let limit = 10;
    let offset = 10;
   // const url = `${this.questionsUrl}?${limit}&${offset}`;
    const url = `${this.questionsUrl}`;
    //return this.http.get(this.questionsUrl)
    return this.http.get(url,{
      headers: headers
    })
      .toPromise()
      .then(response => response.json().data as Question[])
      .catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }


  getQuestion(id: number): Promise<Question> {
  //  return this.getQuestions()
   //   .then(questions => questions.find(question => question.id === id));
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Question)
      .catch(this.handleError);

  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(question: Question): Promise<Question> {
    const url = `${this.questionsUrl}/${question.id}`;
    return this.http
      .put(url, JSON.stringify(question), {headers: this.headers})
      .toPromise()
      .then(() => question)
      .catch(this.handleError);
  }

  create(name: string): Promise<Question> {
    return this.http
      .post(this.questionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}

