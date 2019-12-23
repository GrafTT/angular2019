import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router'

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
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { LoginComponent } from './login/login.component';

import { CreateCoursePageComponent } from './course-create/create-course-page/create-course-page.component';
import { DatepickerComponent } from './course-create/datepicker/datepicker.component';
import { DurationFieldComponent } from './course-create/duration-field/duration-field.component';
import { AuthorsFieldComponent } from './course-create/authors-field/authors-field.component';
import { GlobalPipesModule } from './global-pipes/global-pipes.module';
import { NotFoundComponent } from './not-found/not-found.component';

import {AuthGuard} from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';

import { TokenInterceptor } from './interceptors/auth.interceptors';
import { LoadingComponent } from './loading/loading.component';

const appRoutes: Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthGuard]},
  { path: 'courses/new', component: CreateCoursePageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CreateCoursePageComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'courses', component: CoursesComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent },
]

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
    ConfirmModalComponent,
    LoginComponent,
    DatepickerComponent,
    CreateCoursePageComponent,
    DurationFieldComponent,
    AuthorsFieldComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    GlobalPipesModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
