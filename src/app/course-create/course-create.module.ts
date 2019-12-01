import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCoursePageComponent } from './create-course-page/create-course-page.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';
import { AuthorsFieldComponent } from './authors-field/authors-field.component';
import { FormsModule }   from '@angular/forms';
import { GlobalPipesModule } from '../global-pipes/global-pipes.module';


@NgModule({
  declarations: [CreateCoursePageComponent, DatepickerComponent, DurationFieldComponent, AuthorsFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalPipesModule
  ],
  exports: [CreateCoursePageComponent, DatepickerComponent, DurationFieldComponent, AuthorsFieldComponent],
})
export class CourseCreateModule { }
