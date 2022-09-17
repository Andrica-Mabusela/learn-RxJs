import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-learn-operators',
  templateUrl: './learn-operators.component.html',
  styleUrls: ['./learn-operators.component.css']
})
export class LearnOperatorsComponent implements OnInit {

  constructor() { }

  studentList = ['Penny', 'Amy', 'Benedette'];

  studentName = 'Penny';

  studentObj = {
    name: 'Penny',
    age: 27
  }


  // Observable of string array
  students: Observable<string[]> = of(this.studentList);

  // Observable of string
  student: Observable<string> = of(this.studentName);

  // Observable of object
  studentObject: Observable<{name: string; age: number;}> = of(this.studentObj);

  ngOnInit(): void {


    this.students.subscribe(data =>{
      console.log(data);
    })

    this.student.subscribe(response => {
      console.log(response);
    })


    this.studentObject.subscribe(response => {
      console.log(response);
    })

  }

}
