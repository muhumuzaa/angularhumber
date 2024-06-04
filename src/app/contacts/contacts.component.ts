import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title= 'myForm';
  reactiveForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      
      city: new FormControl(null),
      state: new FormControl("ontario"),
      zip: new FormControl(null),
    })

    
  }

  ngOnSubmit(){
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm.value);
    }
    else{
      console.log('Form is invalid');
    }
  }

}
