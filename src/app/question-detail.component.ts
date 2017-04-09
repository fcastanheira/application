import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Question }         from './question';
import { QuestionService }  from './question.service';

@Component({
  moduleId: module.id,
  selector: 'my-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question;

  constructor(
    private QuestionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.QuestionService.getQuestion(+params['id']))
      .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.QuestionService.update(this.question)
      .then(() => this.goBack());
  }

}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
