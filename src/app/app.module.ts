import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { PostComponent } from './post/post.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnotherChildComponent } from './another-child/another-child.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { DirectiveTaskComponent } from './directive-task/directive-task.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveTask2Component } from './directive-task2/directive-task2.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    PostComponent,
    ChildComponent,
    AnotherChildComponent,
    DirectivePracticeComponent,
    DirectiveTaskComponent,
    DataBindingComponent,
    DirectiveTask2Component,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
