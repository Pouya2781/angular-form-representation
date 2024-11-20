import { Component } from '@angular/core';
import {ControlContainer, NgForm, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'password-container',
  templateUrl: './password-container.component.html',
  styleUrls: ['./password-container.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgModelGroup,
    }
  ]
})
export class PasswordContainerComponent {

}
