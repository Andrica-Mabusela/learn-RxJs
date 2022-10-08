import { Component, OnInit, Input, Provider } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

export const FormPart: Provider = {
  provide: ControlContainer,
  useExisting: FormGroupDirective
};

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  viewProviders: [FormPart]
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() myForm;
  // viewProviders: [{provide: ControlContainer}]

  ngOnInit(): void {
  }

}
