import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent {
  title: string = "I am interpulation"
  imgUrl: string = "https://www.shutterstock.com/image-photo/small-green-plant-growing-dirt-260nw-2484299737.jpg"
  applyStyle= false
  applyClass = false
  userName: string = "Two way interpolation"

  onKeyup($event: any){
    if($event.keyCode == 13){
      console.log($event.target.value)
    }

  }

  onKeyupEnter(username: HTMLInputElement){
    console.log("username", username.value)

  }

  onKeyupEnterEvent($event: any){
    console.log($event.target.value)
  }

}
