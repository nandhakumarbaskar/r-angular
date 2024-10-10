import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task2',
  templateUrl: './directive-task2.component.html',
  styleUrls: ['./directive-task2.component.css']
})
export class DirectiveTask2Component {
  name: string
  email: string
  address: string
  userDetails: any[] = []

  saveData(){
    this.userDetails.push({
"name": this.name,
"email": this.email,
address: this.address
    }


    )

  }

  removeItem(item: number){
    this.userDetails.splice(item, 1)
  }

  onTrackBy(){
    
  }
}
