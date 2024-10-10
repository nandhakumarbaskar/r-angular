import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  divValue: string
  applyClass1= true
  applyClass2 = true

  onClick(divVal: string){
    this.divValue = divVal
  }

}
