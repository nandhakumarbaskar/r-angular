import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParentMessage: any
  childMessage = "I am message from child"
  outputChildMessage = "I am output child message"

  @Output() eventMessage = new EventEmitter<string>()

  constructor(){
    console.log(this.fromParentMessage)
  }

  ngOnInit(): void {
    console.log(this.fromParentMessage)

  }

  emitMessage(){
    this.eventMessage.emit(this.outputChildMessage)
  }

}
