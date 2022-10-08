import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup;

  ngOnInit(): void 
  {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: ''
    });
  }

  submitForm(){
    console.log(this.myForm);
  }

}
