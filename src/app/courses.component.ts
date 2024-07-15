import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>{{ getTitle() }}666</h2>
    <ul>
        <li *ngFor="let course of courses" >
            {{course}}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses: any;

    getTitle(){
        return this.title;
    }

    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
}