import { HighlightBorderDirective } from './highlight-border.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ElementRef, Component, NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
  template: `
  <h2 HighlightBorderDirective="yellow">Something Yellow</h2>
  <h2 highlight>The Default (Gray)</h2>
  <h2>No Highlight</h2>
  <input #box [highlight]="box.value" value="cyan"/>`
})
class TestComponent { }

describe('HighlightBorderDirective', () => {
  let fixture;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, HighlightBorderDirective],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(TestComponent);
    fixture.detectChanges(); // initial binding
  });
});
