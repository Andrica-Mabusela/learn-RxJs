import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-observables',
  templateUrl: './learning-observables.component.html',
  styleUrls: ['./learning-observables.component.css']
})
export class LearningObservablesComponent implements OnInit {

  constructor() { 
    
  }

  agents: Observable<string>;
  agentName: string;
  

  ngOnInit(): void {

      this.agents = new Observable(function(observer){
          try{
              observer.next('Richard');

              setInterval(() => {
                observer.next('Dinesh');
              }, 3000);

              setInterval(() => {
                observer.next('Gilfoyle');
              }, 6000)
              
              
          }catch(e){
              observer.error(e);
          }
      });

      this.agents.subscribe(response => {
        this.agentName = response;
      })

  }

}
