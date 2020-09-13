import { Answer } from '../answer/answer.model';

export class Question {
  _id?: string;
  title: string;
  description: string;
  createDate?: Date;
  icon?: string;
  answer: Answer[];
  constructor(
    title: string,
    description: string,
    createDate?: Date,
    icon?: string
  ) {
    this._id='1';
    this.title = title;
    this.description = description;
    this.createDate = createDate;
    this.icon = icon;
    this.answer = [];
  }
}
