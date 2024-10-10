import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: any


  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]),
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl("", Validators.required),
        contactno: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]")
        ])
      }),
      skill: new FormArray([])
    })
  }
  ngOnInit(): void {

  }

  onSubmit(f: NgForm){
    console.log(f.value)

  }

  onChange(fullName: NgModel){
    console.log(fullName)
  }

  onReactiveSubmit(){
    console.log(this.form.value)
  }

  get FullName(){
    return this.form.get("fullName")
  }

  get Email(){
    return this.form.get("email")
  }

  get Address(){
    return this.form.get("contactDetails.address")
  }

  get ShippingAddress(){
    return this.form.get("contactDetails.shippingAddress")
  }

  get ContactNo(){
    return this.form.get("contactDetails.contactno")
  }

  get Skills(){
    return this.form.get("skill") as FormArray
  }

  addSkills(skill: HTMLInputElement){
    this.Skills.push(
      new FormControl(skill.value)
    )
    skill.value = ''
    console.log(this.form)

  }

  removeItem(i: number){
    this.Skills.removeAt(i)

  }




}
