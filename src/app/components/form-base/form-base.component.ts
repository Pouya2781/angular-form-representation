import { Component } from '@angular/core';

@Component({
  selector: 'form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent {
  protected value: string = 'random value';
}
