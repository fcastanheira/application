import {Component, OnInit} from '@angular/core';
import {Question} from './question';
import {QuestionService} from './question.service';
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'my-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css']
})


export class QuestionsComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;


  constructor(
    private router: Router,
    private QuestionService: QuestionService){}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
     this.QuestionService.getQuestions().then(questions => this.questions = questions);
  }
  onSelect(question: Question): void{
    this.selectedQuestion = question;
    this.gotoDetail();
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedQuestion.id]);
  }


}



