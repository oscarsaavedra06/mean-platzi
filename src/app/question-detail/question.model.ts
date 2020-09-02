import { Answer } from "../answer/answer.model";

export class Question {
    title: string;
    description: string;
    createDate?: Date;
    icon?: string;
    answer: Answer[];
    constructor(title: string,
        description: string,
        createDate?: Date,
        icon?: string) {

        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.icon = icon;
        this.answer = [];
    }

}