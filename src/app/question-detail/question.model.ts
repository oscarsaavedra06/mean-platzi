import { title } from "process";

export class Question {
    title: string;
    description: string;
    createDate?: Date;
    icon?: string;

    constructor(title: string,
        description: string,
        createDate?: Date,
        icon?: string) {

        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.icon = icon;

    }

}