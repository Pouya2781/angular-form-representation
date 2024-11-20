import { Component } from '@angular/core';
import {ControlContainer, NgForm, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'age-container',
  templateUrl: './age-container.component.html',
  styleUrls: ['./age-container.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm,
    }
  ]
})
export class AgeContainerComponent {

}
