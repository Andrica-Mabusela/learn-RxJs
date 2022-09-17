import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-learn-operators',
  templateUrl: './learn-operators.component.html',
  styleUrls: ['./learn-operators.component.css']
})
export class LearnOperatorsComponent implements OnInit {

  constructor() { }

  @ViewChild('validate')
  validate: ElementRef;

  studentList = ['Penny', 'Amy', 'Benedette'];

  departments: string[] = ['Finance', 'Markerting', 'IT'];

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


  // create an observable from an array using from operator
  companyDepartments$ : Observable<string> = from(this.departments);

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


  rxJsEventObservable(){
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');

    btnObservable$.subscribe(data => {
      console.log(data);
    });

  }

  


}
