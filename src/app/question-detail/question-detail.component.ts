import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question = new Question(
    'Esta es una nueva pregunta android',
    'Tengo una duda en cuanto a bla bla bla texto de prueba',
    new Date,
    'devicon-android-plain'

  );
  constructor() { }

  ngOnInit(): void {
  }

}
