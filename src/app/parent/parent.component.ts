import { AfterViewInit, Component, OnInit, ViewChild, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  parentMessage: string = "I am message from parent";
  anotherParentMessage: string = "I am another message from parent"
  @ViewChild(ChildComponent) ChildComponent: any
  formChildMessage: any
  outputChildMessage: any

  constructor(){}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.ChildComponent)
    this.formChildMessage = this.ChildComponent.childMessage

  }

  receiveMessage($event: string){
    this.outputChildMessage = $event
  }

}
