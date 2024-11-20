import {Component, Input} from '@angular/core';
import {AbstractControlDirective, FormControl} from "@angular/forms";

@Component({
  selector: 'form-control-status-visualizer',
  templateUrl: './form-control-status-visualizer.component.html',
  styleUrls: ['./form-control-status-visualizer.component.scss']
})
export class FormControlStatusVisualizerComponent {
  @Input({required: true})
  public controlDirective!: AbstractControlDirective;
}
