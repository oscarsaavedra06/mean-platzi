import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question-detail/question.model';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() question: Question;
  OnSubmit(form: NgForm) {
    console.log(form.value);
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date,
      new User(null,null,'oscar', 'saavedra')
    );
    this.question.answer.unshift(answer);
    //unshift: agrega al inicio del array
    form.reset();  //borrar text area del form
  }
  constructor() { }

  ngOnInit(): void {
  }

}
