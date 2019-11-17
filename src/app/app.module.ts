import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';
import { HighlightBorderDirective } from './highlight-border.directive';
import { DurationPipe } from './duration.pipe';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    SearchComponent,
    AddButtonComponent,
    CourseItemComponent,
    LoadMoreButtonComponent,
    HighlightBorderDirective,
    DurationPipe,
    ConfirmModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
