import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent {
  title: string
  description: string
  imgUrl: string
  postUrl: string
  backgroundCheck: boolean

}
