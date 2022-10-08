import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, throttleTime, mergeMap, map, interval, Subject, debounceTime, distinctUntilChanged, of, reduce, switchMap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'learn-RxJs';

  @ViewChild('validate') validate: ElementRef;

  @ViewChild('input1') input1: ElementRef;
  @ViewChild('input2') input2: ElementRef;
  @ViewChild('span') span: ElementRef;

  // rxJsEventObservable(){
  //   const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');

  //   btnObservable$.subscribe(data => {
  //     console.log(data);
  //   })
  // }

  ngOnInit(): void {

    // const observable = interval(1000);

    // const observer = {
    //   next: (value) => {
    //       console.log(value);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('completed');
    //   }
    // }

    // observable.pipe(map((value) => {
    //     return value * 2;
    // })).subscribe(observer)

    
    
  }

    ngAfterViewInit(){
     
      // console.log(this.validate.nativeElement);
      // fromEvent(this.validate.nativeElement, 'click')
      // .pipe(throttleTime(1000), map((data: any) => data.clientY))
      // .subscribe(observer);


      // new Observable(function(obs){
      //     obs.next('1st value');
      //     obs.next('2nd value');
      //     obs.complete();
      //     obs.error('error');
      //     obs.next('3rd value');
      // }).subscribe(observer)
      // let subject = new Subject();

      // subject.subscribe({
      //   next: (value) => console.log(value),
      //   error: (error) => console.log(error),
      //   complete: () => console.log('Completed')
      // });


      // this.validate.nativeElement.onclick = () => {
      //   subject.next('A new data peice');
      // }



      // var observable = of(1,2,3,4,5);

      // observable
      // .pipe(reduce((total, currentValue) => {
      //   return total + currentValue;
      // }, 0))
      // .subscribe({
      //   next: (value) => console.log(value) 
      // })

      
      // const obs1: any = fromEvent(this.input1.nativeElement, 'input');
      // const obs2: any  = fromEvent(this.input2.nativeElement, 'input');

      // obs1.pipe(mergeMap(
      //   (event1: any) => {
      //     return obs2.pipe(map((event2: any) => event1.target.value + ' ' + event2.target.value))
      //   }
      // ))
      // .subscribe(
      //   (combinedValue) => this.span.nativeElement.textContent = combinedValue
      // )

      let obs1 = fromEvent(this.validate.nativeElement, 'click');
      let obs2 = interval(1000);

      obs1.pipe(switchMap((event: any) => {
        return obs2;
      }))
      .subscribe(console.log)

      

    }

  

}
