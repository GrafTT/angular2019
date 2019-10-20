import {ICourse} from './models/course';

export class Course implements ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string

    constructor(id: number, title: string, date: string, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = date;
        this.duration = duration;
        this.description = description;
    }
}
