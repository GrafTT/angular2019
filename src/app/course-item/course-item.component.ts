import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '../models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Output() onDelete = new EventEmitter<number>();
  borderColor: string;
  
  delete(id:number){
    confirm("Do you realy want to delete this course?") && this.onDelete.emit(id);
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.switchBorderColor();
  }
  handleEditBtn() {
    this.router.navigate(['/courses', this.course.id])
  }

  private switchBorderColor ():void {
    const today = Date.now();
    const creationDate = Date.parse(this.course.creationDate);
    const twoWeeks = 14 * 86400000;
    const diff = today - creationDate;
    if (diff > 0 && diff <= twoWeeks) {
      this.borderColor = 'green';
    } else if (diff < 0) {
      this.borderColor = 'blue';
    } else {
      this.borderColor = 'transparent';
    }
  }

}
