import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.css']
})
export class AnotherChildComponent implements OnInit {
  @Input() fromAnotherParentMessage: any
  constructor(){}

  ngOnInit(): void {
    console.log(this.fromAnotherParentMessage)

  }

}
