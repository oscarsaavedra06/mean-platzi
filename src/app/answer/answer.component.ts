import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  OnSubmit(form: NgForm) {
    console.log(form.value);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
