import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'form-structure',
  templateUrl: './form-structure.component.html',
  styleUrls: ['./form-structure.component.scss']
})
export class FormStructureComponent {

  protected onSubmit(form: NgForm) {
    console.log(form);
  }
}
