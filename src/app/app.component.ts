import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

const importsArray: any[] = [
  RouterOutlet,
  CoursesComponent,
  CourseComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: importsArray,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Caramel';
}
